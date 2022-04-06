import { IState, CoordinatesConstants, CoordinatesActionsTypes } from './types';

const initialStore: IState = {
   city: '',
   country: '',
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
            isError: '',
         }
      case CoordinatesConstants.ADD_ERROR_COORDINATES:
         return {
            ...state,
            country: '',
            isError: action.payload.error,
         }
      default:
         return state;
   }
};
