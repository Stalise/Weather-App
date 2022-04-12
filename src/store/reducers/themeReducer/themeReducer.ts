import { IState, ThemeConstants, ThemeActionsTypes } from './types';

const initialStore: IState = {
   theme: '',
};

export const themeReducer = (state = initialStore, action: ThemeActionsTypes) => {
   switch (action.type) {
      case ThemeConstants.CHANGE_THEME:
         return {
            ...state,
            theme: action.payload.theme,
         }
      case ThemeConstants.CLEAR_THEME:
         return {
            ...state,
            theme: '',
         }
      default:
         return state;
   }
};
