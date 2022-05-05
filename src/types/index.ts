import { firebase } from "../Database";

export type DocumentDataChatType = firebase.firestore.DocumentData | undefined;
export interface InputsType {
  text: string;
}
export interface messageType {
  id: string;
  createdAt: Date;
}
export type MessageInputType = messageType & InputsType;
export interface createChatType {
  chatWith: string[];
  lastInteraction: Date;
  messages: MessageInputType[];
}
export interface isChatExistType {
  chatData: createChatType;
  chatId: string | undefined;
}
