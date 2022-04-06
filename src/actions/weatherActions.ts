import { WeatherActionsConstants } from '../store/reducers/weatherReducer/types';

export const changeWeatherAction = (weather: any[]) => {
   return { type: WeatherActionsConstants.CHANGE_WEATHER, payload: { weather } }
}
