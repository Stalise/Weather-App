import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { Wrapper, InputCity, Country, NotFound, FoundButton } from "./style";
import Checkboxes from "../Checkboxes/Checkboxes";
import { sagasConstants } from '../../../constants/saga';
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Location: FC = () => {

   const { country, isError } = useTypedSelector((state) => state.coordinates)
   const dispatch = useDispatch()
   const [city, setCity] = useState('')

   const getWeather = async () => {
      dispatch({
         type: sagasConstants.SAGA_CHANGE_COORDINATES,
         city,
      })
   }

   return (
      <Wrapper>
         <InputCity
            onChange={(e) => setCity(e.target.value)}
            value={city}
         />
         <Country>{country}</Country>
         <NotFound>{isError}</NotFound>
         <FoundButton
            onClick={() => getWeather()}>
            Show
         </FoundButton>
         <Checkboxes />
      </Wrapper>
   )
};

export default Location;
