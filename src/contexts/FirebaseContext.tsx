import { ReactElement, createContext, useCallback, useEffect, useMemo, useReducer } from 'react';

// third-party
import { getAuth, updatePassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// action - state management
import authReducer from '../store/reducers/auth';
import { LOGIN, LOGOUT } from '../store/reducers/authActions';

// project-imports
import Loader from '../components/Loader';
import { AuthProps, FirebaseContextType } from '../types/auth';

// firebase initialize
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  });
}

// const
const initialState: AuthProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

// ==============================|| FIREBASE CONTEXT & PROVIDER ||============================== //

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const FirebaseProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(
    () =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      firebase.auth().onAuthStateChanged((user: any) => {
        if (user) {
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user: {
                id: user.uid,
                email: user.email!,
                name: user.displayName || 'Stebin Ben',
                role: 'UI/UX Designer',
              },
            },
          });
        } else {
          dispatch({
            type: LOGOUT,
          });
        }
      }),
    [dispatch]
  );

  const firebaseEmailPasswordSignIn = useCallback(
    (email: string, password: string) =>
      firebase.auth().signInWithEmailAndPassword(email, password),
    []
  );

  const firebaseGoogleSignIn = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }, []);

  const firebaseTwitterSignIn = useCallback(() => {
    const provider = new firebase.auth.TwitterAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }, []);

  const firebaseFacebookSignIn = useCallback(() => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }, []);

  const firebaseRegister = useCallback(
    async (email: string, password: string) =>
      firebase.auth().createUserWithEmailAndPassword(email, password),
    []
  );

  const logout = useCallback(() => firebase.auth().signOut(), []);

  const resetPassword = useCallback(async (email: string) => {
    await firebase.auth().sendPasswordResetEmail(email);
  }, []);

  const firebaseUpdatePassword = useCallback((newPassword: string) => {
    const auth = getAuth();
    updatePassword(auth.currentUser!, newPassword);
    console.log('Password updated successfully!');
    logout();
    console.log('User logged out successfully!');
  }, []);

  const updateProfile = useCallback(() => {}, []);

  const value = useMemo(
    () => ({
      ...state,
      firebaseRegister,
      firebaseEmailPasswordSignIn,
      login: () => {},
      firebaseGoogleSignIn,
      firebaseTwitterSignIn,
      firebaseFacebookSignIn,
      firebaseUpdatePassword,
      logout,
      resetPassword,
      updateProfile,
    }),
    [
      state,
      firebaseRegister,
      firebaseEmailPasswordSignIn,
      firebaseGoogleSignIn,
      firebaseTwitterSignIn,
      firebaseFacebookSignIn,
      firebaseUpdatePassword,
      logout,
      resetPassword,
      updateProfile,
    ]
  );
  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }
  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};

export default FirebaseContext;
