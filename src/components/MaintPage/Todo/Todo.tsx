import { FC, useContext, useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Loader from "../../Common/Spinner/Spinner";
import TodoList from '../TodoList/TodoList';
import Modal from "../../Common/Modal/Modal";
import TodoForm from '../TodoForm/TodoForm';
import Authorization from "../Authorization/Authorization";
import { Wrapper, AddTodo } from './style';
import { ContextFirebase } from '../../../store/context/contextFirebase';
import { firebaseRequests } from '../../../api/firebaseApi';

const Todo: FC = () => {

   const [viewModal, setViewModal] = useState<boolean>(false)

   const { authFirebase, firestore } = useContext(ContextFirebase)

   const [authInfo, authLoading] = useAuthState(authFirebase)

   const [user] = useCollectionData(firestore.collection('users').where('userEmail', '==', `${authInfo?.email ? authInfo?.email : ''}`))

   const addTodo = () => {
      setViewModal(!viewModal)
   }

   useEffect(() => {
      if (authInfo !== null) {
         firebaseRequests.updateUserTodos(firestore, authInfo)
      }
   }, [authInfo])

   return (
      <Wrapper>
         {!authLoading && <Authorization authInfo={authInfo} />}

         {authInfo !== null && <AddTodo onClick={() => addTodo()} >Add todo</AddTodo>}

         {user !== undefined && <TodoList user={user} />}

         {authLoading && <Loader />}

         <Modal isModal={viewModal} setIsModal={setViewModal}>
            <TodoForm
               authInfo={authInfo}
               firestore={firestore}
               user={user}
               setViewModal={setViewModal}
            />
         </Modal>
      </Wrapper >
   )
};

export default Todo;
