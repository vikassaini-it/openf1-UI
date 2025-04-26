"use client";

import { useEffect, useState } from "react";
import { History } from "lucide-react";
import { F1Session, getSessions } from "@/api/openf1";
import { Spinner } from "@/components/ui/spinner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { getLocationProperty } from "@/lib/constants/locations";
import { Flag } from "@/components/flag";
import { EnhancedFlagBackground } from "@/components/enhancedFlagBackground";

interface Meeting {
  country_name: string;
  date_start: string;
  date_end: string;
  country_key: number;
  sessions: F1Session[]; // Replace 'any' with your session type
}

export default function HistoryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [meetings, setMeetings] = useState<Record<number, Meeting>>({});
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  const [selectedMeeting, setSelectedMeeting] = useState<Meeting>(null);
  const [selectedSession, setSelectedSession] = useState<F1Session>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (selectedYear) {
      fetchAllSessions(selectedYear);
    }
  }, [selectedYear]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsList = [];

    for (let year = 2023; year <= currentYear; year++) {
      yearsList.push(year);
    }

    setYears(yearsList);

    // Set default selected year to current year
    setSelectedYear(currentYear);
  }, []);

  const fetchAllSessions = async (year: number) => {
    setLoading(true);
    try {
      const sessionsData = await getSessions(year);
      const tempMeetings: Record<number, Meeting> = {};
      sessionsData?.forEach((session) => {
        const meetingKey = session.meeting_key;
        if (tempMeetings[meetingKey]) {
          tempMeetings[meetingKey]["sessions"].push(session);
          if (
            new Date(tempMeetings[meetingKey]["date_start"]) >
            new Date(session.date_start)
          ) {
            tempMeetings[meetingKey]["date_start"] = session.date_start;
          }
          if (
            new Date(tempMeetings[meetingKey]["date_end"]) <
            new Date(session.date_end)
          ) {
            tempMeetings[meetingKey]["date_end"] = session.date_end;
          }
        } else {
          tempMeetings[meetingKey] = {
            country_name: session.country_name,
            date_start: session.date_start,
            date_end: session.date_end,
            country_key: session.country_key,
            sessions: [],
          };
        }
      });
      setMeetings(tempMeetings);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const yearsDropDown = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{selectedYear}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {years.map((year) => (
            <DropdownMenuItem
              key={year}
              onClick={() => {
                if (year != selectedYear) {
                  setSelectedYear(year);
                  setSelectedMeeting(null);
                }
              }}
            >
              {year}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const getMeetingRow = (meeting: Meeting, priority: boolean = false) => {
    const start = new Date(meeting.date_start);
    const end = new Date(meeting.date_end);
    return (
      <>
        <Flag
          border={true}
          country_key={meeting.country_key}
          priority={priority}
        />
        <b>{meeting.country_name}</b> {start.getDate()}/{start.getMonth() + 1} -{" "}
        {end.getDate()}/{end.getMonth() + 1}
      </>
    );
  };

  const meetingsDropDown = () => {
    return (
      <>
        {loading ? (
          <Spinner size="small" />
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {selectedMeeting ? (
                  <>{getMeetingRow(selectedMeeting, true)}</>
                ) : (
                  "Select GP"
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {Object.entries(meetings)?.map(([meetingId, meeting]) => (
                <DropdownMenuItem
                  key={meetingId}
                  onClick={() => {
                    setSelectedMeeting(meeting);
                    setSelectedSession(null);
                  }}
                >
                  {getMeetingRow(meeting)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </>
    );
  };

  const sessionsDropDown = () => {
    return (
      <>
        {selectedMeeting == null ? null : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {selectedSession
                  ? selectedSession.session_type
                  : "Select Session"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {selectedMeeting["sessions"].map((session: F1Session) => (
                <DropdownMenuItem
                  key={session.session_key}
                  onClick={() => setSelectedSession(session)}
                >
                  {session.session_type}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </>
    );
  };

  return (
    <EnhancedFlagBackground
      className="grow"
      classNameChildrens="grow p-5 flex flex-col gap-4"
      country_key={selectedMeeting?.country_key}
    >
      <div className="flex flex-col gap-4">
        <h2 className="flex gap-2 items-center text-2xl/7 font-bold sm:text-3xl sm:tracking-tight">
          <History />
          <span>History</span>
        </h2>
        <div className="flex gap-4 items-center">
          <div>{yearsDropDown()}</div>
          <div>{meetingsDropDown()}</div>
          <div>{sessionsDropDown()}</div>
        </div>
      </div>
      {loading ? null : <> {children}</>}
    </EnhancedFlagBackground>
  );
}
