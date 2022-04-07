import { FC } from 'react';

import { Wrapper } from './style';
import Weather from '../../containers/MainPage/Weather';

const MainPage: FC = () => (
   <Wrapper>
      <Weather />
   </Wrapper>
);

export default MainPage;
