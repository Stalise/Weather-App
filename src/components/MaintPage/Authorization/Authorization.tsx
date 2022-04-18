import { FC, useContext } from "react";

import { AuthButton } from './style';
import { ContextFirebase } from '../../../store/context/contextFirebase';

interface IProps {
   authInfo: any,
}

const Authorization: FC<IProps> = ({ authInfo }) => {

   const { authFirebase, firebase } = useContext(ContextFirebase)

   const login = async () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      await authFirebase.signInWithPopup(provider)
   }

   return (
      <>
         {authInfo === null
            ?
            <AuthButton onClick={() => login()}>Login</AuthButton>
            :
            <AuthButton onClick={() => authFirebase.signOut()}>Logout</AuthButton>
         }
      </>
   );
}

export default Authorization;
