export interface IState {
   dataOpenWeather: any[],
   dataApiXu: any[],
}

/*----------------------------------------------*/

//! enum для названий экшенов
export enum WeatherActionsConstants {
   CHANGE_WEATHER = "CHANGE_WEATHER",
}

//! типизация payload
interface IChangeWeatherPayload {
   weather: any[],
}

//! типы для экшенов
interface IChangeWeatherAction {
   type: WeatherActionsConstants.CHANGE_WEATHER,
   payload: IChangeWeatherPayload
}

//! все типы в одном type, чтобы легче экспортировать
export type WeatherActionsTypes =
   IChangeWeatherAction
