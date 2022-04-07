import { FC, useState } from "react";

import { Wrapper, Label, Field, Checkbox, Text } from './style';

const Checkboxes: FC = () => {

   const [currentCheckbox, setCurrentCheckbox] = useState<string>('OpenWeatherApi');

   const changeCheckbox = (data: string) => {
      setCurrentCheckbox(data)
   }

   return (
      <Wrapper>
         <Label>
            <Text>OpenWeatherApi</Text>
            <Checkbox onChange={() => changeCheckbox('OpenWeatherApi')} type="checkbox" />
            <Field className={currentCheckbox === 'OpenWeatherApi' ? '_active' : ''} />
         </Label>
         <Label>
            <Text>RandomApi</Text>
            <Checkbox onChange={() => changeCheckbox('RandomApi')} type="checkbox" />
            <Field className={currentCheckbox === 'RandomApi' ? '_active' : ''} />
         </Label>
      </Wrapper>
   )
}

export default Checkboxes;
