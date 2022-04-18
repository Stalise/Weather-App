import styled from 'styled-components';

export const Wrapper = styled.div`
   max-width: 100%;
   width: 100%;
   /* border: 1px solid red; */

   @media (max-width: 680px) {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`;

export const AddTodo = styled.button`
   display: inline-block;
   margin-left: 10px;
   padding: 5px 10px;
   background-color: gray;
   font-size: 20px;
   color: #fff;
   border-radius: 5px;
   margin-bottom: 20px;
   transition: background-color 0.3s;

   &:hover {
      background-color: darkgray;
   }
`;
