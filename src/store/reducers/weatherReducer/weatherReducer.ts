// import { ADD_HISTORY, CLEAR_HISTORY } from './constants'
import { IState, WeatherActionsConstants, WeatherActionsTypes } from './types';

const initialStore: IState = {
   currentApi: 'OpenWeatherApi',
   currentDegrees: '°C',
   dataOpenWeather: [],
   dataWeatherBit: [],
   isLoading: false,
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
      case WeatherActionsConstants.CHANGE_DEGREES:
         return {
            ...state,
            currentDegrees: action.payload.degrees,
         };
      case WeatherActionsConstants.CHANGE_LOADING_WEATHER:
         return {
            ...state,
            isLoading: action.payload.loading,
         };
      default:
         return state;
   }
};
