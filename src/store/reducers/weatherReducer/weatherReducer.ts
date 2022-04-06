// import { ADD_HISTORY, CLEAR_HISTORY } from './constants'
import { IState, WeatherActionsConstants, WeatherActionsTypes } from './types';

const initialStore: IState = {
   dataOpenWeather: [],
   dataApiXu: [],
};

export const weatherReducer = (state = initialStore, action: WeatherActionsTypes) => {
   switch (action.type) {
      case WeatherActionsConstants.CHANGE_WEATHER:
         return { ...state, dataOpenWeather: [...action.payload.weather] };
      default:
         return state;
   }
};
