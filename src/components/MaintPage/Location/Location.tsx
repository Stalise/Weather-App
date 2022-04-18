import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Wrapper, InputCity, Country, NotFound, FoundButton, Search, Field } from "./style";
import ApiServices from "../ApiServices/ApiServices";
import { sagasConstants } from '../../../constants/saga';
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Location: FC = () => {

   const { city, country, isError } = useTypedSelector((state) => state.coordinates)
   const dispatch = useDispatch()
   const [inputCity, setInputCity] = useState('')

   const getWeather = async () => {
      if (inputCity === city && city !== '') return

      dispatch({
         type: sagasConstants.SAGA_CHANGE_COORDINATES_CITY,
         city: inputCity,
      })
   }

   const pressEnter = ({ key }: { key: string }) => {
      if (key === 'Enter') {
         getWeather()
      }
   }

   useEffect(() => {
      setInputCity(city)
   }, [city])

   useEffect(() => {
      document.addEventListener('keydown', pressEnter)

      return () => {
         document.removeEventListener('keydown', pressEnter)
      }
   }, [inputCity])

   return (
      <Wrapper>
         <Search>
            <FoundButton onClick={() => getWeather()} />
            <Field>
               <InputCity
                  onChange={(e) => setInputCity(e.target.value)}
                  value={inputCity}
               />
               <Country>{country}</Country>
            </Field>
         </Search>
         <NotFound>{isError}</NotFound>
         <ApiServices />
      </Wrapper>
   )
};

export default Location;
