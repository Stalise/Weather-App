import { FC } from "react";

import { Wrapper, Container, Content, LeftContainer, RightContainer } from './style';
import Time from "../../components/MaintPage/Time/Time";
import Todo from "../../components/MaintPage/Todo/Todo";
import Location from "../../components/MaintPage/Location/Location";
import Days from "../../components/MaintPage/Days/Days";

const Weather: FC = () => {

   return (
      <Wrapper>
         <Container>
            <Content>
               <LeftContainer>
                  <Time />
                  <Todo />
               </LeftContainer>
               <RightContainer>
                  <Location />
               </RightContainer>
            </Content>
            <Days />
         </Container>
      </Wrapper>
   )
};

export default Weather;
