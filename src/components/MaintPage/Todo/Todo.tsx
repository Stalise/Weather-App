import { FC } from "react";

import { Wrapper, AuthButton, TodoList, TodoItem, TodoTime, TodoTask } from './style';

const Todo: FC = () => (
   <Wrapper>
      <AuthButton>Login</AuthButton>
      <TodoList>
         <TodoItem>
            <TodoTime>7:15</TodoTime>
            <TodoTask>Take a shower</TodoTask>
         </TodoItem>

         <TodoItem>
            <TodoTime>14:15</TodoTime>
            <TodoTask>Phone call</TodoTask>
         </TodoItem>
      </TodoList>
   </Wrapper>
);

export default Todo;
