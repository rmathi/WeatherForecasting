export interface WeatherForecastModel {
  cod : string,
  message: number,
  cnt:number,
  list: ListForeCast[],
  city: CityDetails,
}
export interface CityDetails{
  id: number,
  name: string,
  coord: {
    lat: number,
    lon: number
  },
  country: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number
}
export interface ListForeCast{
  dt: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number,
  },
  weather: weatherDetails[],
  clouds: {
    all: number
  },
  wind: windDetails,
  visibility: number,
  pop: number,
  rain: {
    '3h': number,
  },
  sys: {
    pod: string
  },
  dt_txt: any
}

export interface weatherDetails{
  id: number,
  main: string,
  description: string
  icon: string
}
export interface windDetails{
  speed: number,
  deg: number,
  gust: number,
}

export interface customeList{
  date: string,
  list: ListForeCast[]
}
