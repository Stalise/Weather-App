import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuidv1 } from 'uuid';

import { Wrapper, Today, TodayImgContainer, TodayImg, TodayContent, TodayTitle, TodayDegrees, OtherDays, Empty } from './style';
import Day from "../Day/Day";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IWeatherDaily } from '../../../types/weatherTypes';
import { sagasConstants } from '../../../constants/saga';

const Days: FC = () => {

   const [currentDays, setCurrentDays] = useState<IWeatherDaily[]>([])

   const dispatch = useDispatch()
   const { city } = useTypedSelector((state) => state.coordinates)
   const { currentApi, dataOpenWeather, dataWeatherBit } = useTypedSelector((state) => state.weather)

   useEffect(() => {
      const currentData = currentApi === 'OpenWeatherApi' ? dataOpenWeather : dataWeatherBit

      if (currentData.length === 0 && city !== '') {
         if (currentApi === 'OpenWeatherApi') {
            dispatch({ type: sagasConstants.SAGA_OPEN_WEATHER_API })
         } else if (currentApi === 'WeatherBitApi') {
            dispatch({ type: sagasConstants.SAGA_WEATHER_BIT_API })
         }
      }

      setCurrentDays([...currentData])
   }, [currentApi, dataOpenWeather, dataWeatherBit, city])

   return (
      <Wrapper>
         {currentDays.length > 0
            ?
            <>
               <Today>
                  <TodayImgContainer>
                     <TodayImg src={currentDays[0].icon} />
                  </TodayImgContainer>
                  <TodayContent>
                     <TodayTitle>Today</TodayTitle>
                     <TodayDegrees>{`${currentDays[0].temp}°`}</TodayDegrees>
                  </TodayContent>
               </Today>
               <OtherDays>
                  {currentDays.map((elem, index) => {
                     if (index > 0 && index < 7) {
                        return (
                           <Day data={elem} key={uuidv1()} />
                        )
                     }
                  })}
               </OtherDays>
            </>
            :
            <Empty>You need to choose a city</Empty>
         }
      </Wrapper>
   );
}

export default Days;
