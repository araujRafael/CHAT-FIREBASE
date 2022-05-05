import { Dispatch, SetStateAction } from "react";
import { newUserGoogleTypes } from "../../AuthContext/types";
import { firebase } from "../../../Database";

export interface CurrentChatType {
  id: string;
  text: string;
  createdAt: Date;
}
export interface CurrentChatFirebaseType {
  id: string;
  text: string;
  createdAt: firebase.firestore.Timestamp;
}
export interface ChatContextType {
  currentUserChat: newUserGoogleTypes;
  setCurrentUserChat: Dispatch<SetStateAction<newUserGoogleTypes>>;
  currentChat: CurrentChatType[];
  setCurrentChat: Dispatch<SetStateAction<CurrentChatType[]>>;
}
