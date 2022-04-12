import { IState, CoordinatesConstants, CoordinatesActionsTypes } from './types';

const initialStore: IState = {
   city: '',
   country: '',
   timezone: '',
   timeInitialIp: 0,
   lat: 0,
   lon: 0,
   isError: '',
   isLoading: false,
};

export const coordinatesReducer = (state = initialStore, action: CoordinatesActionsTypes) => {
   switch (action.type) {
      case CoordinatesConstants.CHANGE_COORDINATES:
         return {
            ...state,
            lat: action.payload.coordinates.lat,
            lon: action.payload.coordinates.lon,
            country: action.payload.coordinates.country,
            city: action.payload.coordinates.name,
            timeInitialIp: action.payload.coordinates.timeInitialIp,
            timezone: '',
            isError: '',
         };
      case CoordinatesConstants.ADD_ERROR_COORDINATES:
         return {
            ...state,
            country: '',
            isError: action.payload.error,
         };
      case CoordinatesConstants.CHANGE_TIMEZONE_COORDINATES:
         return {
            ...state,
            timezone: action.payload.timezone,
         };
      case CoordinatesConstants.CLEAR_COORDINATES:
         return {
            ...initialStore,
         };
      default:
         return state;
   }
};
