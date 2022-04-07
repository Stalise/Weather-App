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

export const AuthButton = styled.button`
   padding: 5px 10px;
   background-color: gray;
   font-size: 20px;
   color: #fff;
   border-radius: 5px;
   margin-bottom: 20px;
`;

export const TodoList = styled.ul`
   max-width: 100%;
   width: 100%;
`;

export const TodoItem = styled.li`
   display: flex;
   align-items: center;
   &:not(:last-child) {
      margin-bottom: 10px;
   }
`;

export const TodoTime = styled.p`
   max-width: 45px;
   width: 100%;
   margin-right: 10px;
   background-color: #2d2d2d;
   color: #fff;
   padding: 5px 0 6px 0;
   border-radius: 5px;
   font-size: 15px;
   text-align: center;
`;

export const TodoTask = styled.p`
   color: #fff;;
   font-size: 22px;
`;
