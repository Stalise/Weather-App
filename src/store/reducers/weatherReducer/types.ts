import { IWeatherDaily } from '../../../types/weatherTypes';

export interface IState {
   currentApi: string,
   currentDegrees: string,
   dataOpenWeather: IWeatherDaily[],
   dataWeatherBit: IWeatherDaily[],
   isLoading: boolean,
}

/*----------------------------------------------*/

//! enum для названий экшенов
export enum WeatherActionsConstants {
   CHANGE_WEATHER = "CHANGE_WEATHER",
   CHANGE_API = "CHANGE_API",
   CLEAR_WEATHER = "CLEAR_WEATHER",
   CHANGE_DEGREES = "CHANGE_DEGREES",
   CHANGE_LOADING_WEATHER = "CHANGE_LOADING_WEATHER",
}

//! типизация payload
interface IChangeWeatherPayload {
   weather: any[],
   api: string,
}

interface IChangeApiPayload {
   api: string,
}

interface IChangeDegreesPayload {
   degrees: string,
}

interface IChangeLoadingWeatherPayload {
   loading: boolean,
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

interface IChangeDegreesAction {
   type: WeatherActionsConstants.CHANGE_DEGREES,
   payload: IChangeDegreesPayload,
}

interface IChangeLoadingWeatherAction {
   type: WeatherActionsConstants.CHANGE_LOADING_WEATHER,
   payload: IChangeLoadingWeatherPayload,
}

//! все типы в одном type, чтобы легче экспортировать
export type WeatherActionsTypes =
   IChangeWeatherAction |
   IChangeApiAction |
   IClearWeatherAction |
   IChangeDegreesAction |
   IChangeLoadingWeatherAction
