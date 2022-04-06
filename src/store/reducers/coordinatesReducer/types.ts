import { ICoordinatesRequest } from '../../../types/weatherTypes';

export interface IState {
   city: string,
   country: string,
   lat: number,
   lon: number,
   isError: string,
   isLoading: boolean,
}

/*----------------------------------------------*/

//! enum для названий экшенов
export enum CoordinatesConstants {
   CHANGE_COORDINATES = "CHANGE_COORDINATES",
   ADD_ERROR_COORDINATES = "ADD_ERROR_COORDINATES",
}

//! типизация payload
interface IChangeCoordinatesPayload {
   coordinates: ICoordinatesRequest,
}

interface IErrorCoordinatesPayload {
   error: string,
}

//! типы для экшенов
interface IChangeCoordinatesAction {
   type: CoordinatesConstants.CHANGE_COORDINATES,
   payload: IChangeCoordinatesPayload
}

interface IErrorCoordinatesAction {
   type: CoordinatesConstants.ADD_ERROR_COORDINATES,
   payload: IErrorCoordinatesPayload
}

//! все типы в одном type, чтобы легче экспортировать
export type CoordinatesActionsTypes =
   IChangeCoordinatesAction |
   IErrorCoordinatesAction
