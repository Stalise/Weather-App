export interface ICoordinatesRequest {
   name: string
   country: string,
   lat: number,
   lon: number,
   timeInitialIp?: number,
}

export interface IRequestOpenWeather {
   daily: any[],
   timezone: string
}

export interface IRequestWeatherBit {
   data: any[],
   timezone: string
}

export interface IWeatherDaily {
   day: string,
   temp: number,
   icon: string
}
