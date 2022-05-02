import React, { createContext, ReactNode, useContext, useState } from 'react';

// import { Container } from './styles';
//
import { firebase } from "../../Database";
import { toast } from "react-toastify";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { sign, verify } from "jsonwebtoken";
import { AuthContextTypes, DataFormTypes, newUserGoogleTypes } from './types'
// Config
const secret_jwt: any = "segredo";
const ONE_DAY = 604800;
const KEY_TOKEN = "AUTH_TOKEN";

const initialValue = {
  authenticated: false,
  setAuthenticated: () => { },
  userGoogle: {
    avatar: '',
    name: '',
    email: '',
    id: '',
  },
  setUserGoogle: () => { },
  signinWithGoogle: () => { }
}

const AuthContext = createContext<AuthContextTypes>(initialValue)
export const useAuthContext = () => useContext(AuthContext)

// Provider
interface ProviderProps {
  children: ReactNode | JSX.Element;
}
export const AuthContextProvider = ({ children }: ProviderProps) => {
  // States
  const [authenticated, setAuthenticated] = useState(initialValue.authenticated)
  const [userGoogle, setUserGoogle] = useState(initialValue.userGoogle);
  // Hooks


  // Handle Functions
  async function signinWithGoogle(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider)
      if (result.user) {
        const { displayName, email, uid, photoURL } = result.user
        const newUser: newUserGoogleTypes = {
          id: uid,
          avatar: photoURL,
          name: displayName,
          email,
        }
        console.log(newUser);
      }
    } catch (error) {
      console.log(error);
    }
  }


  // Render
  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        userGoogle,
        setUserGoogle,
        signinWithGoogle,
      }}>
      {children}
    </AuthContext.Provider>
  );
}