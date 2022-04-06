import { FC } from "react";
import { v1 as uuidv1 } from 'uuid';

import { Wrapper, Today, TodayImgContainer, TodayImg, TodayContent, TodayTitle, TodayDegrees, OtherDays } from './style';
import Day from "../Day/Day";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Days: FC = () => {

   const { dataOpenWeather } = useTypedSelector((state) => state.weather)

   return (
      <Wrapper>
         {dataOpenWeather.length > 0
            && (
               <>
                  <Today>
                     <TodayImgContainer>
                        <TodayImg src={`http://openweathermap.org/img/w/${dataOpenWeather[0].icon}.png`} />
                     </TodayImgContainer>
                     <TodayContent>
                        <TodayTitle>Today</TodayTitle>
                        <TodayDegrees>8°</TodayDegrees>
                     </TodayContent>
                  </Today>
                  <OtherDays>
                     {dataOpenWeather.map((elem, index) => {
                        if (index > 0 && index < 7) {
                           return (
                              <Day data={elem} key={uuidv1()} />
                           )
                        }
                     })}
                  </OtherDays>
               </>
            )}
      </Wrapper>
   );
}

export default Days;
