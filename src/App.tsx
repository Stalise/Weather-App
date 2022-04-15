import { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from './hooks/useTypedSelector';
import MainPage from './pages/MainPage/MainPage';
import { myThemes } from './assest/styles/theme';
import { getPositionIp } from './utils/getPositionIp';

const App: FC = () => {

   const dispatch = useDispatch()
   const { theme } = useTypedSelector((state) => state.theme)

   useEffect(() => {
      getPositionIp(dispatch)
   }, [])

   return (
      <div>
         <ThemeProvider theme={myThemes[theme]}>
            <MainPage />
         </ThemeProvider>
      </div>
   )
};

export default App;
