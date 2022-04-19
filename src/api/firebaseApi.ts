import firebase from 'firebase/compat/app';
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { v1 as uuidv1 } from 'uuid';

export const firebaseRequests = {
   createUserDocument: async (firestore: any, authInfo: any, text: string, time: string) => {

      const currentTime = firebase.firestore.Timestamp.now()

      await setDoc(doc(firestore, "users", authInfo?.email), {
         userEmail: authInfo?.email,
         todos: [
            {
               todoId: uuidv1(),
               createTime: currentTime,
               time,
               text,
            },
         ],
      });
   },

   addUserTodo: async (firestore: any, authInfo: any, user: any, text: string, time: string) => {

      const currentTime = firebase.firestore.Timestamp.now()

      const updateTodos = [...user[0].todos]
      updateTodos.push({
         todoId: uuidv1(),
         createTime: currentTime,
         time,
         text,
      })

      await updateDoc(doc(firestore, "users", authInfo?.email), {
         todos: updateTodos,
      });
   },

   updateUserTodos: async (firestore: any, authInfo: any) => {

      let userInfo: any = {}
      let filteredTodos: any[] = []

      await firestore
         .collection('users')
         .where('userEmail', '==', `${authInfo?.email ? authInfo?.email : ''}`)
         .get()
         .then((snapshot: any) => snapshot.docs.forEach((doc: any) => userInfo = doc.data()))

      if (userInfo.todos.length > 0) {
         let currentTime: any = firebase.firestore.Timestamp.now()
         currentTime = new Date(currentTime * 1000).toLocaleString('en', { month: 'long', day: 'numeric' })

         filteredTodos = userInfo.todos.filter((elem: any) => {
            const createTimeTodo = new Date(elem.createTime.seconds * 1000).toLocaleString('en', { month: 'long', day: 'numeric' })

            if (currentTime === createTimeTodo) {
               return elem
            }
         })

         if (userInfo.todos.length !== filteredTodos.length) {

            await updateDoc(doc(firestore, "users", authInfo?.email), {
               todos: filteredTodos,
            });
         }
      }
   },
}
