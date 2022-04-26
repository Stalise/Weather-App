import { createContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { firebaseSettings } from '../../constants/firebase';

firebase.initializeApp(firebaseSettings)

const authFirebase = firebase.auth()
const firestore = firebase.firestore()

export const contextFirebaseData = {
   firebase,
   authFirebase,
   firestore,
}

export const ContextFirebase = createContext<any>(null)
