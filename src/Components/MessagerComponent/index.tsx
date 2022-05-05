import React, { useRef } from 'react';
import { auth, db } from '../../Database';
import SendIcon from '../../icons/SendIcon';
import MyButton from '../MyButton';
import { ContentContainer, ContentHeader, FormMessageContainer, SendMessageContainer, Textarea, UserMessage, ViewMessages, WrapMessage } from './styled';
import moment from 'moment'
import { AvatarContainer, FallbackContainer, ImageContainer } from '../Avatar'
import { newUserGoogleTypes } from '../../Context/AuthContext/types';
import { useForm, SubmitHandler } from "react-hook-form";
import { useChatContext } from '../../Context/ChatContext';
import { toast } from 'react-toastify';
import {
  DocumentDataChatType,
  InputsType,
  MessageInputType,
  createChatType,
  isChatExistType,
} from '../../types'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';



interface MessagerComponent {
  user: newUserGoogleTypes
}

const MessagerComponent: React.FC<MessagerComponent> = ({
  user
}: MessagerComponent) => {
  return (
    <ContentContainer>
      <HeaderComponent image={user.avatar} name={user.name} />
      <SendMessage />
    </ContentContainer>
  );
}

export default MessagerComponent;
// Component
interface HeaderComponent {
  image?: string | undefined
  name: string
}
const HeaderComponent: React.FC<HeaderComponent> = ({
  image, name
}: HeaderComponent) => {
  let splitName = name.toUpperCase()?.split(' ')
  let FallbackName = splitName[1]
    ? splitName[0][0] + splitName[1][0]
    : name.toUpperCase().slice(0, 2)

  return (
    <ContentHeader>
      <AvatarContainer>
        {
          image ? (
            <ImageContainer src={image} />
          ) : (
            <FallbackContainer delayMs={300}>
              {FallbackName}
            </FallbackContainer>
          )
        }
      </AvatarContainer>
      <p>{name}</p>
    </ContentHeader>
  )
}
// Component

const SendMessageSchema = yup.object({
  text: yup.string().required().min(1)
})

const SendMessage: React.FC = ({

}) => {
  // Hooks
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<InputsType>({
    resolver: yupResolver(SendMessageSchema)
  });
  // Context
  const { currentUserChat, currentChat } = useChatContext()

  // Effects

  // Handle functions
  const createChat = async (msg: MessageInputType): Promise<void> => {
    try {
      let myId: string = auth.currentUser!.uid
      let otherUserId: string = currentUserChat.id
      let newChat: DocumentDataChatType & createChatType = {
        chatWith: [otherUserId, myId],
        lastInteraction: new Date(),
        messages: [msg]
      }
      await db.collection("chat").add(newChat)
    } catch (error) {
      console.log(error);

    }
  }

  const isChatExist = async (): Promise<isChatExistType> => {
    let myId: string = auth.currentUser!.uid
    let otherUserId: string = currentUserChat.id
    const chatRef = await db.collection("chat").get()
    const docs = chatRef.docs
    let chatFind = docs.find(x => {
      let data = x.data()
      let chatWith: any[] = data.chatWith
      let includeMyId = chatWith.includes(myId)
      let includeOtherId = chatWith.includes(otherUserId)
      return includeMyId && includeOtherId
    })
    let chatId = chatFind?.id
    let chatData: createChatType | any = chatFind?.data();
    return { chatData, chatId }
  }

  const pushMessages = async (ChatExist: isChatExistType, newChat: MessageInputType) => {
    let oldChat = ChatExist.chatData
    let chatId = ChatExist.chatId
    let oldMessages: MessageInputType[] | undefined[] = oldChat.messages
    try {
      const chatRef = await db.collection("chat").doc(chatId).update({
        messages: [...oldMessages, newChat]
      })
    } catch (error) {
      console.log(error);
    }
  }

  const sendMessageToContact: SubmitHandler<InputsType> = async (
    content: InputsType
  ) => {
    let text = content.text
    let myChat: MessageInputType = {
      text,
      id: auth.currentUser!.uid,
      createdAt: new Date()
    };

    if (!currentUserChat.id) {
      toast.warn("Choice a contact!")
      return
    }
    setValue("text", "");
    try {
      let chatExist = await isChatExist()
      if (!chatExist.chatId) {
        await createChat(myChat)
        return
      }
      await pushMessages(chatExist, myChat)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormMessageContainer
      onSubmit={handleSubmit(sendMessageToContact)}
    >
      {/* View Messages */}
      <ViewMessages >
        {/* Messages */}
        {
          currentChat[0].id ? (
            currentChat.map((x, i) => {
              let data = x
              let createdAt = data.createdAt;
              return (
                <UserMessageContainer
                  key={i}
                  userId={data.id}
                  text={data.text}
                  createdAt={createdAt}
                />)
            })) : (
            <>
            </>
          )
        }
      </ViewMessages>
      {/* Send */}
      <SendMessageContainer>
        <Textarea
          onKeyDown={e => {
            // console.log(e);
            if (e.key === ":") {
              // Bring Emojis
              console.log(e);
            }
            if (e.key === "Enter" && !e.ctrlKey) {
              e.preventDefault()
              let value = e.currentTarget.value
              if (!value) {
                return
              }
              sendMessageToContact(getValues())
              setValue("text", "");
            }
            if (e.key === "Enter" && e.ctrlKey) {
              let text = watch("text")
              setValue("text", text + "\n");
            }
          }}
          disabled={!currentUserChat.id}
          {...register("text")}
        />
        <MyButton >
          <SendIcon data-width={25} />
        </MyButton>
      </SendMessageContainer>
    </FormMessageContainer>
  )
}

interface UserMessageContainer {
  userId: string | undefined;
  text: string;
  createdAt: Date;
}
const UserMessageContainer: React.FC<UserMessageContainer> = ({
  createdAt, userId, text
}: UserMessageContainer) => {
  let date = createdAt
  let myMessage: boolean = auth.currentUser?.uid === userId
  let myMessageClass = myMessage ? 'myMessage' : ''

  return (
    <UserMessage className={myMessageClass} >
      <WrapMessage>
        <p>{text}</p>
        <span>{moment(date, 'YYYYMMDD').fromNow()}</span>
      </WrapMessage>
    </UserMessage>
  )
} 