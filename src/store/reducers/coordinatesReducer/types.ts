import { ICoordinatesRequest } from '../../../types/weatherTypes';

export interface IState {
   city: string,
   country: string,
   timezone: string,
   timeInitialIp: number,
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
   CHANGE_TIMEZONE_COORDINATES = "CHANGE_TIMEZONE_COORDINATES",
   CLEAR_COORDINATES = "CLEAR_COORDINATES",
}

//! типизация payload
interface IChangeCoordinatesPayload {
   coordinates: ICoordinatesRequest,
}

interface IErrorCoordinatesPayload {
   error: string,
}

interface IChangeTimezonePayload {
   timezone: string,
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

interface IChangeTimezoneAction {
   type: CoordinatesConstants.CHANGE_TIMEZONE_COORDINATES,
   payload: IChangeTimezonePayload
}

interface IClearCoordinatesAction {
   type: CoordinatesConstants.CLEAR_COORDINATES,
}

//! все типы в одном type, чтобы легче экспортировать
export type CoordinatesActionsTypes =
   IChangeCoordinatesAction |
   IErrorCoordinatesAction |
   IChangeTimezoneAction |
   IClearCoordinatesAction
