import styled from 'styled-components';

export const Wrapper = styled.div`
   margin-bottom: 30px;
`;

export const Clock = styled.p`
   font-size: 50px;
   font-weight: 600;
   color: #fff;
   margin-bottom: 5px;

   @media (max-width: 680px) {
      text-align: center;
   }
`;

export const Date = styled.p`
   font-size: 25px;
   font-weight: 600;
   color: #fff;

   @media (max-width: 680px) {
      text-align: center;
   }
`;
