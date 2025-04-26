const LOCATIONS = [
  {
    country_key: 5,
    country_code: "AUS",
    country_name: "Australia",
    circuit_key: 10,
    circuit_short_name: "Melbourne",
    gmt_offset: "11:00:00",
    country_flag: "https://flagcdn.com/au.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245932/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Australia.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245766/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png",
  },
  {
    country_key: 17,
    country_code: "AUT",
    country_name: "Austria",
    circuit_key: 19,
    circuit_short_name: "Spielberg",
    gmt_offset: "02:00:00",
    country_flag: "https://flagcdn.com/at.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245931/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Austria.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245766/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png",
  },
  {
    country_key: 30,
    country_code: "AZE",
    country_name: "Azerbaijan",
    circuit_key: 144,
    circuit_short_name: "Baku",
    gmt_offset: "04:00:00",
    country_flag: "https://flagcdn.com/az.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245932/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Azerbaijan.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245766/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Azerbaijan_Circuit.png",
  },
  {
    country_key: 36,
    country_code: "BRN",
    country_name: "Bahrain",
    circuit_key: 63,
    circuit_short_name: "Sakhir",
    gmt_offset: "03:00:00",
    country_flag: "https://flagcdn.com/bh.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245933/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Bahrain.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245766/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png",
  },
  {
    country_key: 16,
    country_code: "BEL",
    country_name: "Belgium",
    circuit_key: 7,
    circuit_short_name: "Spa-Francorchamps",
    gmt_offset: "02:00:00",
    country_flag: "https://flagcdn.com/be.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245933/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Belgium.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245767/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png",
  },
  {
    country_key: 10,
    country_code: "BRA",
    country_name: "Brazil",
    circuit_key: 14,
    circuit_short_name: "Interlagos",
    gmt_offset: "-03:00:00",
    country_flag: "https://flagcdn.com/br.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245933/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Brazil.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245767/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png",
  },
  {
    country_key: 46,
    country_code: "CAN",
    country_name: "Canada",
    circuit_key: 23,
    circuit_short_name: "Montreal",
    gmt_offset: "-04:00:00",
    country_flag: "https://flagcdn.com/ca.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245933/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Canada.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245767/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png",
  },
  {
    country_key: 53,
    country_code: "CHN",
    country_name: "China",
    circuit_key: 49,
    circuit_short_name: "Shanghai",
    gmt_offset: "08:00:00",
    country_flag: "https://flagcdn.com/cn.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245933/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/China.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245767/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png",
  },
  {
    country_key: 2,
    country_code: "GBR",
    country_name: "Great Britain",
    circuit_key: 2,
    circuit_short_name: "Silverstone",
    gmt_offset: "01:00:00",
    country_flag: "https://flagcdn.com/gb.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677249936/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Great%20Britain.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245768/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png",
  },
  {
    country_key: 14,
    country_code: "HUN",
    country_name: "Hungary",
    circuit_key: 4,
    circuit_short_name: "Hungaroring",
    gmt_offset: "02:00:00",
    country_flag: "https://flagcdn.com/hu.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245934/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Hungary.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245768/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png",
  },
  {
    country_key: 13,
    country_code: "ITA",
    country_name: "Italy",
    circuit_key: 6,
    circuit_short_name: "Imola",
    gmt_offset: "02:00:00",
    country_flag: "https://flagcdn.com/it.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677250070/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Emilia%20Romagna.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245768/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png",
  },
  {
    country_key: 13,
    country_code: "ITA",
    country_name: "Italy",
    circuit_key: 39,
    circuit_short_name: "Monza",
    gmt_offset: "02:00:00",
    country_flag: "https://flagcdn.com/it.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245934/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Italy.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245768/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png",
  },
  {
    country_key: 4,
    country_code: "JPN",
    country_name: "Japan",
    circuit_key: 46,
    circuit_short_name: "Suzuka",
    gmt_offset: "09:00:00",
    country_flag: "https://flagcdn.com/jp.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245934/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Japan.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245769/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png",
  },
  {
    country_key: 8,
    country_code: "MEX",
    country_name: "Mexico",
    circuit_key: 65,
    circuit_short_name: "Mexico City",
    gmt_offset: "-06:00:00",
    country_flag: "https://flagcdn.com/mx.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245934/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Mexico.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245769/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png",
  },
  {
    country_key: 114,
    country_code: "MON",
    country_name: "Monaco",
    circuit_key: 22,
    circuit_short_name: "Monte Carlo",
    gmt_offset: "02:00:00",
    country_flag: "https://flagcdn.com/mc.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245935/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Monaco.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245769/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png",
  },
  {
    country_key: 133,
    country_code: "NED",
    country_name: "Netherlands",
    circuit_key: 55,
    circuit_short_name: "Zandvoort",
    gmt_offset: "02:00:00",
    country_flag: "https://flagcdn.com/nl.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245935/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Netherlands.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245770/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png",
  },
  {
    country_key: 149,
    country_code: "QAT",
    country_name: "Qatar",
    circuit_key: 150,
    circuit_short_name: "Lusail",
    gmt_offset: "03:00:00",
    country_flag: "https://flagcdn.com/qa.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245935/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Qatar.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245770/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png",
  },
  {
    country_key: 153,
    country_code: "KSA",
    country_name: "Saudi Arabia",
    circuit_key: 149,
    circuit_short_name: "Jeddah",
    gmt_offset: "03:00:00",
    country_flag: "https://flagcdn.com/sa.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245936/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Saudi%20Arabia.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245770/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png",
  },
  {
    country_key: 157,
    country_code: "SGP",
    country_name: "Singapore",
    circuit_key: 61,
    circuit_short_name: "Singapore",
    gmt_offset: "08:00:00",
    country_flag: "https://flagcdn.com/sg.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245936/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Singapore.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245771/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png",
  },
  {
    country_key: 1,
    country_code: "ESP",
    country_name: "Spain",
    circuit_key: 15,
    circuit_short_name: "Catalunya",
    gmt_offset: "02:00:00",
    country_flag: "https://flagcdn.com/es.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245936/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Spain.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245771/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png",
  },
  {
    country_key: 21,
    country_code: "UAE",
    country_name: "United Arab Emirates",
    circuit_key: 70,
    circuit_short_name: "Yas Marina Circuit",
    gmt_offset: "04:00:00",
    country_flag: "https://flagcdn.com/ae.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245937/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Abu%20Dhabi.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245771/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png",
  },
  {
    country_key: 19,
    country_code: "USA",
    country_name: "United States",
    circuit_key: 9,
    circuit_short_name: "Austin",
    gmt_offset: "-05:00:00",
    country_flag: "https://flagcdn.com/us.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245937/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/United%20States.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245771/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/United_States_Circuit.png",
  },
  {
    country_key: 19,
    country_code: "USA",
    country_name: "United States",
    circuit_key: 152,
    circuit_short_name: "Las Vegas",
    gmt_offset: "-08:00:00",
    country_flag: "https://flagcdn.com/us.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1684834719/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Las%20Vegas%20testing.png",
    circuit_map:
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png.transform/9col/image.png",
  },
  {
    country_key: 19,
    country_code: "USA",
    country_name: "United States",
    circuit_key: 151,
    circuit_short_name: "Miami",
    gmt_offset: "-04:00:00",
    country_flag: "https://flagcdn.com/us.svg",
    country_background:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245938/content/dam/fom-website/2018-redesign-assets/Track%20icons%2016x9/Miami.jpg",
    circuit_map:
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245772/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png",
  },
];

const getLocationProperty = (
  searchParameter: any,
  searchValue: any,
  returnProperty: any
) => {
  let property = null;
  LOCATIONS.forEach((location) => {
    if (location[searchParameter] == searchValue) {
      property = location[returnProperty];
    }
  });
  return property;
};

export { LOCATIONS, getLocationProperty };
