import { FC } from "react";
import Moment from 'react-moment';
import 'moment-timezone';

import { Wrapper, Clock, Date } from './style';
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Time: FC = () => {

   const { timezone } = useTypedSelector((state) => state.coordinates)

   return (
      <Wrapper>
         {timezone.length
            ?
            <>
               <Clock>
                  <Moment format="HH:mm" interval={1000} tz={timezone} />
               </Clock>
               <Date><Moment format="dddd, D MMMM YYYY" tz={timezone} /></Date>
            </>
            :
            null
         }
      </Wrapper>
   )
};

export default Time;
