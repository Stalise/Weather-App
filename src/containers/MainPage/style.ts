import styled from 'styled-components';

export const Wrapper = styled.div`
   height: 100%;
   width: 100%;
   padding: 0 15px;
   overflow: hidden;
   flex: 1 1 auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: url('./images/sunny_blur.jpg') 0 0/100% 100% no-repeat;

   @media (max-width: 680px) {
      padding: 0;
   }
`;

export const Container = styled.div`
   max-width: 900px;
   width: 100%;
   border-radius: 5px;
   box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.2);
   background: url('./images/sunny.jpg') 0 0/cover no-repeat;
`;

export const Content = styled.div`
   max-width: 100%;
   width: 100%;
   /* height: 350px; */
   padding: 50px 35px;
   display: flex;

   @media (max-width: 680px) {
      flex-direction: column;
   }
`;

export const LeftContainer = styled.div`
   width: 50%;

   @media (max-width: 680px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;
   }
`;

export const RightContainer = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: flex-end;

   @media (max-width: 680px) {
      border: 1px solid red;
      width: 100%;
      display: flex;
      align-items: center;
      order: 1;
   }
`;
