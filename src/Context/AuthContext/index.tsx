import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// import { Container } from './styles';
//
import { auth, db, firebase } from "../../Database";
import { toast } from "react-toastify";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { sign, verify } from "jsonwebtoken";
import { AuthContextTypes, DataFormTypes, newUserGoogleTypes } from './types'
// Config
const secret_jwt: any = "segredo";
const ONE_DAY = 604800;
const KEY_TOKEN = "AUTH_TOKEN";

export const initialValue = {
  authenticated: false,
  setAuthenticated: () => { },
  userGoogle: {
    avatar: '',
    name: '',
    email: '',
    id: '',
  },
  setUserGoogle: () => { },
  signinWithGoogle: () => { },
  handleLogOut: () => { }
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

  // Effects
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true)
        const { displayName, photoURL, uid, email } = user;
        if (!displayName || !photoURL) {
          toast.error("Missing information from Google Account!");
        }
        setUserGoogle({
          id: uid,
          name: displayName ? displayName : '',
          avatar: photoURL ? photoURL : '',
          email: email ? email : ''
        }); //setUser
      }
    })
    return () => unSubscribe()
  }, [])

  // Hooks
  async function createUser(user: newUserGoogleTypes): Promise<void> {
    try {
      await db.collection("users").add({ ...user })
    } catch (error) {
      console.log(error);
      toast.error("Error on create user!")
    }

  }
  type VerifyUserAlreadyExist = boolean;
  async function verifyUserAlreadyExist(user: newUserGoogleTypes): Promise<boolean> {
    let result: VerifyUserAlreadyExist;
    const userRef = await db.collection("users").get()
    let docUser = userRef.docs.find(x => {
      let data = x.data()
      return data.id === user.id
    })
    if (docUser?.exists) {
      result = true
    } else {
      result = false
    }
    return result
  }
  // Handle Functions
  async function signinWithGoogle(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider)
      if (result.user) {
        const { displayName, email, uid, photoURL } = result.user
        const newUser: newUserGoogleTypes = {
          id: uid,
          avatar: photoURL!,
          name: displayName!,
          email: email!,
        }
        let userExist = await verifyUserAlreadyExist(newUser);
        if (!userExist) {
          createUser(newUser).catch(err => {
            console.log(err);
          }).finally(() => [
            setAuthenticated(true)
          ])
          return
        }
        setAuthenticated(true)
      }
    } catch (error) {
      console.log(error);
      setAuthenticated(false)
    }
  }

  function handleLogOut(): void {
    auth.signOut()
      .then(() => {
        setUserGoogle(initialValue.userGoogle)
        setAuthenticated(false)
      })
      .catch(err => {
        toast.error(err)
      })
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
        handleLogOut
      }}>
      {children}
    </AuthContext.Provider>
  );
}