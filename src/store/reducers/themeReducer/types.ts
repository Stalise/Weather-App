export interface IState {
   theme: string,
}

//! enum для названий экшенов
export enum ThemeConstants {
   CHANGE_THEME = "CHANGE_THEME",
   CLEAR_THEME = "CLEAR_THEME",
}

//! типизация payload
interface IChangeThemePayload {
   theme: string,
}

//! типизация экшенов
export interface IChangeThemeAction {
   type: ThemeConstants.CHANGE_THEME,
   payload: IChangeThemePayload
}

export interface IClearThemeAction {
   type: ThemeConstants.CLEAR_THEME,
}

//! все типы в одном type, чтобы легче экспортировать
export type ThemeActionsTypes =
   IChangeThemeAction |
   IClearThemeAction
