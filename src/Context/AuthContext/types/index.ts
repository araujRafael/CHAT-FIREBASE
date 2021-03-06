import { SetStateAction } from "react";

export interface DataFormTypes {
  name: string;
  email: string;
  password: string;
  rememberLogin: boolean;
}

export type newUserGoogleTypes = {
  avatar: string;
  name: string;
  email: string;
  id: string;
};

export interface AuthContextTypes {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<SetStateAction<boolean>>;
  userGoogle: {
    avatar: string;
    name: string;
    id: string;
    email: string;
  } | null;
  setUserGoogle: React.Dispatch<SetStateAction<any>>;
  signinWithGoogle: () => void;
  handleLogOut: () => void;
}
