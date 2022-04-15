import styled from 'styled-components';

export const Todos = styled.ul`
   max-width: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
`;

export const TodoItem = styled.li`
   display: inline-flex;
   align-items: center;
   cursor: pointer;
   &:not(:last-child) {
      margin-bottom: 10px;
   }

   &:hover p {
      background-color: darkred;
      color: transparent;
      &:before {
         content: '✖';
         position: absolute;
         top: 4px;
         font-size: 18px;
         left: 16px;
         color: #fff;
      }
   }
`;

export const TodoTime = styled.p`
   flex: 1 0 100%;
   max-width: 45px;
   margin-right: 10px;
   background-color: #2d2d2d;
   color: #fff;
   padding: 5px 0 6px 0;
   border-radius: 5px;
   font-size: 15px;
   text-align: center;
   transition: background-color 0.1s;
   position: relative;
`;

export const TodoTask = styled.span`
   color: #fff;;
   font-size: 22px;
`;
