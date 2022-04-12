import { IWeatherDaily } from '../../../types/weatherTypes';

export interface IState {
   currentApi: string,
   dataOpenWeather: IWeatherDaily[],
   dataWeatherBit: IWeatherDaily[],
}

/*----------------------------------------------*/

//! enum для названий экшенов
export enum WeatherActionsConstants {
   CHANGE_WEATHER = "CHANGE_WEATHER",
   CHANGE_API = "CHANGE_API",
   CLEAR_WEATHER = "CLEAR_WEATHER",
}

//! типизация payload
interface IChangeWeatherPayload {
   weather: any[],
   api: string,
}

interface IChangeApiPayload {
   api: string,
}

//! типы для экшенов
interface IChangeWeatherAction {
   type: WeatherActionsConstants.CHANGE_WEATHER,
   payload: IChangeWeatherPayload
}

interface IChangeApiAction {
   type: WeatherActionsConstants.CHANGE_API,
   payload: IChangeApiPayload
}

interface IClearWeatherAction {
   type: WeatherActionsConstants.CLEAR_WEATHER
}

//! все типы в одном type, чтобы легче экспортировать
export type WeatherActionsTypes =
   IChangeWeatherAction |
   IChangeApiAction |
   IClearWeatherAction
