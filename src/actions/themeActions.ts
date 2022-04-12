import { ThemeConstants } from '../store/reducers/themeReducer/types';

export const changeThemeAction = (theme: string) => {
   return { type: ThemeConstants.CHANGE_THEME, payload: { theme } }
}

export const clearThemeAction = () => {
   return { type: ThemeConstants.CLEAR_THEME }
}
