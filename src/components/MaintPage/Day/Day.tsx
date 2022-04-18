import { FC } from "react";

import { Wrapper, Title, ImgContainer, Img, Degrees } from './style';

interface IProps {
   data: any
}

const Day: FC<IProps> = ({ data }) => {

   return (
      <Wrapper>
         <Title>{data.day}</Title>
         <ImgContainer>
            <Img src={data.icon} />
         </ImgContainer>
         <Degrees>{`${data.temp}°`}</Degrees>
      </Wrapper>
   );
}

export default Day;
