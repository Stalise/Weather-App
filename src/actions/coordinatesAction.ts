import { ICoordinatesRequest } from '../types/weatherTypes';
import { CoordinatesConstants } from '../store/reducers/coordinatesReducer/types';

export const changeCoordinatesAction = (coordinates: ICoordinatesRequest) => {
   return { type: CoordinatesConstants.CHANGE_COORDINATES, payload: { coordinates } }
}

export const errorCoordinatesAction = (error: string) => {
   return { type: CoordinatesConstants.ADD_ERROR_COORDINATES, payload: { error } }
}

export const changeTimezoneAction = (timezone: string) => {
   return { type: CoordinatesConstants.CHANGE_TIMEZONE_COORDINATES, payload: { timezone } }
}

export const clearCoordinatesAction = () => {
   return { type: CoordinatesConstants.CLEAR_COORDINATES }
}
