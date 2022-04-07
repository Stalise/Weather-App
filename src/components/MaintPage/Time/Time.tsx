import { FC } from "react";
import Moment from 'react-moment';
import 'moment-timezone';

import { Wrapper, Clock, Date } from './style';

const Time: FC = () => (
   <Wrapper>
      <Clock>
         <Moment format="HH:mm" interval={1000} tz="America/Los_Angeles" />
      </Clock>
      <Date><Moment format="dddd, D MMMM YYYY" tz="America/Los_Angeles" /></Date>
   </Wrapper>
);

export default Time;
