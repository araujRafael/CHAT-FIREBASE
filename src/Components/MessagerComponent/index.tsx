import React from 'react';
import { auth } from '../../Database';
import SendIcon from '../../icons/SendIcon';
import MyButton from '../MyButton';
import { ContentContainer, ContentHeader, FormMessageContainer, SendMessageContainer, Textarea, UserMessage, ViewMessages, WrapMessage } from './styled';
import moment from 'moment'
import { AvatarContainer, FallbackContainer, ImageContainer } from '../Avatar'


interface Props {
  content: any
}

const MessagerComponent: React.FC<Props> = ({ content }: Props) => {
  return (
    <ContentContainer>
      <HeaderComponent image={''} name={'Rafael Diniz'} />
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
  let splitName = name.toUpperCase().split(' ')
  let FallbackName = splitName[0][0] + splitName[1][0]

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
const SendMessage: React.FC = ({

}) => {

  return (
    <FormMessageContainer onSubmit={() => { }} >
      {/* View Messages */}
      <ViewMessages>
        {/* Popular aqui */}
        <UserMessageContainer
          userId={''}
          text={'Olá'}
          createdAt={new Date('2022-05-02')}
        />
        <UserMessageContainer
          userId={auth.currentUser?.uid}
          text={'Olá'}
          createdAt={new Date('2022-05-03')}
        />
      </ViewMessages>
      {/* Send */}
      <SendMessageContainer>
        <Textarea />
        <MyButton>
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

  return (
    <>
      {
        myMessage
          ? (
            <UserMessage data-myMessage >
              <WrapMessage>
                <p>{text}</p>
                <span>{moment(date, 'YYYYMMDD').fromNow()}</span>
              </WrapMessage>
            </UserMessage>
          )
          : (
            <UserMessage >
              <WrapMessage>
                <p>{text}</p>
                <span>{moment(date, 'YYYYMMDD').fromNow()}</span>
              </WrapMessage>
            </UserMessage>
          )
      }
    </>
  )
} 