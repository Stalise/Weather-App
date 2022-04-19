import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 250px;
   width: 100%;
`;

export const Search = styled.div`
   max-width: 100%;
   width: 100%;
   display: flex;
   justify-content: space-between;
   /* border: 1px solid blue; */
`

export const Field = styled.div`
`

export const InputCity = styled.input`
   max-width: 200px;
   width: 100%;
   background-color: transparent;
   border-bottom: 2px solid #fff;
   text-align: right;
   font-size: 28px;
   color: #fff;
   font-weight: 400;
   margin-bottom: 5px;
`;

export const Country = styled.p`
   max-width: 100%;
   text-align: right;
   color: #fff;
   font-size: 20px;
   margin-bottom: 5px;
`;

export const NotFound = styled.p`
   max-width: 100%;
   color: #910101;
   text-align: right;
   font-size: 18px;
   margin: 7px 0;
   font-weight: 600;
`;

export const FoundButton = styled.button`
   max-width: 37px;
   width: 100%;
   height: 37px;
   background-color: gray;
   font-size: 20px;
   color: #fff;
   border-radius: 5px;
   margin-bottom: 20px;
   position: relative;

   &:hover:before {
      opacity: 1;
   }

   &:before {
      content: '';
      display: block;
      width: 23px;
      height: 23px;
      position: absolute;
      top: 6.5px;
      left: 7px;
      opacity: 0.7;
      transition: 0.3s;
      background: url('./images/loop.png');
   }
`;
