// import { ADD_HISTORY, CLEAR_HISTORY } from './constants'
import { IState, WeatherActionsConstants, WeatherActionsTypes } from './types';

const initialStore: IState = {
   currentApi: 'OpenWeatherApi',
   dataOpenWeather: [],
   dataWeatherBit: [],
};

export const weatherReducer = (state = initialStore, action: WeatherActionsTypes) => {
   switch (action.type) {
      case WeatherActionsConstants.CHANGE_WEATHER:
         return {
            ...state,
            [action.payload.api]: [...action.payload.weather],
         };
      case WeatherActionsConstants.CHANGE_API:
         return {
            ...state,
            currentApi: action.payload.api,
         };
      case WeatherActionsConstants.CLEAR_WEATHER:
         return {
            ...state,
            dataOpenWeather: [],
            dataWeatherBit: [],
         };
      default:
         return state;
   }
};
