import { FC, useContext } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { ContextFirebase } from '../../../store/context/contextFirebase';

import { Todos, TodoItem, TodoTime, TodoTask } from './style';

interface IProps {
   user: any[],
}

const TodoList: FC<IProps> = ({ user }) => {

   const { firestore } = useContext(ContextFirebase)

   const deleteTodo = async (id: string) => {
      let updateTodos = [...user[0].todos]

      updateTodos = updateTodos.filter((elem) => elem.todoId !== id)

      await updateDoc(doc(firestore, "users", user[0].userEmail), {
         todos: updateTodos,
      });
   }

   return (
      <Todos>
         {user[0]?.todos?.map((elem: any) => {
            return (
               <TodoItem key={elem.todoId}>
                  <TodoTime onClick={() => deleteTodo(elem.todoId)} >{elem.time}</TodoTime>
                  <TodoTask>{elem.text}</TodoTask>
               </TodoItem>
            )
         })}
      </Todos>
   );
}

export default TodoList;
