import { WeatherActionsConstants } from '../store/reducers/weatherReducer/types';

export const changeWeatherAction = (weather: any[], api: string) => {
   return { type: WeatherActionsConstants.CHANGE_WEATHER, payload: { weather, api } }
}

export const changeApiAction = (api: string) => {
   return { type: WeatherActionsConstants.CHANGE_API, payload: { api } }
}

export const clearWeatherAction = () => {
   return { type: WeatherActionsConstants.CLEAR_WEATHER }
}

export const changeDegreesAction = (degrees: string) => {
   return { type: WeatherActionsConstants.CHANGE_DEGREES, payload: { degrees } }
}

export const changeLoadWeatherAction = (loading: boolean) => {
   return { type: WeatherActionsConstants.CHANGE_LOADING_WEATHER, payload: { loading } }
}
