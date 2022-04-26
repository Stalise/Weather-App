import styled from 'styled-components';

export const Todos = styled.ul`
   max-width: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   overflow-y: auto;
   max-height: 100px;

   &::-webkit-scrollbar {
      width: 8px;
   }

   &::-webkit-scrollbar-track {
      background-color: #fffff0;
   }
   
   &::-webkit-scrollbar-thumb {
      background-color: lightgray;
   }
`;

export const TodoItem = styled.li`
   display: flex;
   align-items: center;
   &:not(:last-child) {
      margin-bottom: 10px;
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
   cursor: pointer;

   &:hover {
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

export const TodoTask = styled.span`
   display: block;
   color: #fff;;
   font-size: 22px;
`;
