import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth, db } from '../../Database';
import { newUserGoogleTypes } from '../AuthContext/types';
import { ChatContextType, CurrentChatFirebaseType, CurrentChatType } from './types';
import { firebase } from '../../Database'
import { createChatType, DocumentDataChatType } from '../../types';
import { useAuthContext } from '../AuthContext';

export const initialValues = {
  currentUserChat: { avatar: "", name: "", email: "", id: "" },
  setCurrentUserChat: () => { },
  currentChat: [{
    id: "",
    text: "",
    createdAt: new Date()
  }],
  setCurrentChat: () => { },
  limitMessages: 25
}

const ChatContext = createContext<ChatContextType>(initialValues)
export const useChatContext = () => useContext(ChatContext)

interface ChatContextProviderType {
  children: JSX.Element | ReactNode
}
export const ChatContextProvider: React.FC<ChatContextProviderType> = ({
  children
}: ChatContextProviderType) => {
  // Context
  const { userGoogle } = useAuthContext()
  // States
  const [
    currentUserChat, setCurrentUserChat
  ] = useState<newUserGoogleTypes>(initialValues.currentUserChat)
  const [
    currentChat, setCurrentChat
  ] = useState<CurrentChatType[]>(initialValues.currentChat)

  // Effects
  useEffect((): any => {
    let myId: string | undefined = userGoogle?.id
    let otherUserId: string = currentUserChat.id
    const subscribe = db.collection("chat")
      .onSnapshot(async doc => {
        const docs = doc.docs
        let chatFind = docs.find(x => {
          let data = x.data()
          let chatWith: any[] = data.chatWith
          let includeMyId = chatWith.includes(myId)
          let includeOtherId = chatWith.includes(otherUserId)
          return includeMyId && includeOtherId
        })
        if (chatFind?.exists) {
          let chatData = chatFind.data()
          let mergedData = chatData.messages.map((x: CurrentChatFirebaseType) => {
            let createdAt = x.createdAt.toDate()
            return {
              ...x,
              createdAt
            }
          })
          mergedData.sort((a: CurrentChatFirebaseType, b: CurrentChatFirebaseType) => {
            let A: any = a.createdAt
            let B: any = b.createdAt
            return B - A
          })
          setCurrentChat(mergedData.slice(0, initialValues.limitMessages));
        } else {
          setCurrentChat(initialValues.currentChat)
        }
      })
    return () => subscribe
  }, [currentUserChat])

  return (
    <ChatContext.Provider value={{
      currentUserChat, setCurrentUserChat,
      currentChat, setCurrentChat
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export default ChatContextProvider;