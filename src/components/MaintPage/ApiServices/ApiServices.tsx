import { FC } from "react";
import { useDispatch } from "react-redux";

import { Wrapper, Label, Field, Checkbox, Text } from './style';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { changeApiAction } from '../../../actions/weatherActions';

const ApiServices: FC = () => {

   const dispatch = useDispatch()
   const { currentApi } = useTypedSelector((state) => state.weather)

   const changeCheckbox = (api: string) => {
      if (currentApi !== api) {
         dispatch(changeApiAction(api))
      }
   }

   return (
      <Wrapper>
         <Label>
            <Text>OpenWeatherApi</Text>
            <Checkbox onChange={() => changeCheckbox('OpenWeatherApi')} type="checkbox" />
            <Field className={currentApi === 'OpenWeatherApi' ? '_active' : ''} />
         </Label>
         <Label>
            <Text>WeatherBitApi</Text>
            <Checkbox onChange={() => changeCheckbox('WeatherBitApi')} type="checkbox" />
            <Field className={currentApi === 'WeatherBitApi' ? '_active' : ''} />
         </Label>
      </Wrapper>
   )
}

export default ApiServices;
