export interface ICoordinatesRequest {
   country: string,
   lat: number,
   lon: number,
   name: string
}

export interface IWeatherRequest {
   daily: any[],
   timezone: string
}
