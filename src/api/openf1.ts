import { OPEN_F1_URL } from "@/lib/constants/urls";
import { getOpenF1WithinLimit } from "./limiter";

export interface F1Session {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_end: string;
  date_start: string;
  gmt_offset: string;
  location: string;
  meeting_key: number;
  session_key: number;
  session_name: string;
  session_type: string;
  year: number;
}

export async function getSessions(year: number): Promise<F1Session[]> {
  try {
    const sessions = await getOpenF1WithinLimit(
      OPEN_F1_URL.BASE + OPEN_F1_URL.SESSIONS + `?year=${year}`
    );
    return sessions;
  } catch (error) {
    console.error("Failed to get sessions:", error);
    throw error;
  }
}
