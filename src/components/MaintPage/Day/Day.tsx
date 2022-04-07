import { FC } from "react";

import { Wrapper, Title, ImgContainer, Img, Degrees } from './style';

interface IProps {
   data: any
}

const Day: FC<IProps> = ({ data }) => {

   return (
      <Wrapper>
         <Title>Mon</Title>
         <ImgContainer>
            <Img src={`http://openweathermap.org/img/w/${data.icon}.png`} />
         </ImgContainer>
         <Degrees>{`${data.temp}°`}</Degrees>
      </Wrapper>
   );
}

export default Day;
