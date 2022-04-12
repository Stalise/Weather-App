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
            ...action.payload.coordinates,
            city: action.payload.coordinates.name,
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
