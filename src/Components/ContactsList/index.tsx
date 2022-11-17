import React, { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from 'react';
import { newUserGoogleTypes } from '../../Context/AuthContext/types';
import { useChatContext } from '../../Context/ChatContext';
import { auth, db, firebase } from '../../Database';
import { AvatarContainer, FallbackContainer, ImageContainer } from '../Avatar';
import { ContactListContainer, InfosUser, UserComponent } from './styled';
import defaultUser from '../../Images/default/default-user.jpg'

type UserList = firebase.firestore.DocumentData & newUserGoogleTypes;

interface ContactsListTypes {
  isOpen: string
  toggleBar: boolean;
  setToggleBar: Dispatch<SetStateAction<boolean>>
}

const ContactsList: React.FC<ContactsListTypes> = ({
  isOpen,
  toggleBar,
  setToggleBar
}: ContactsListTypes) => {
  // Hooks
  const { setCurrentUserChat } = useChatContext()
  // States
  const [listContacts, setListContacts] = useState<UserList[]>([])


  useEffect((): any => {
    const myId = auth.currentUser?.uid
    const subscribe = db
      .collection("contacts")
      .doc(myId)
      .collection("contact").onSnapshot(x => {
        let docs = x.docs
        let contacts: UserList[] | any = docs.map(x => x.data())
        setListContacts([...contacts]);
        // ...
      })
      ;
    return () => subscribe
  }, [])

  // Render
  return (
    <ContactListContainer>
      {
        listContacts?.map((x: newUserGoogleTypes, i) => <ContactUser
          key={i} user={x}
          isOpen={isOpen}
          onClick={(e) => {
            setCurrentUserChat(x)
            setToggleBar(!toggleBar)
          }}

        />)
      }
    </ContactListContainer>
  );
}

export default ContactsList;

interface ContactUser extends HTMLAttributes<HTMLElement> {
  isOpen: string
  user: newUserGoogleTypes
}
const ContactUser: React.FC<ContactUser> = ({ isOpen, user, ...rest }: ContactUser) => {
  // Contexts
  const limit = 18
  let name = user.name.length >= limit
    ? `${user.name.slice(0, limit)}...` : user.name;
  let email = user.email.length >= limit
    ? `${user.email.slice(0, limit)}...` : user.email;

  return (
    <UserComponent
      {...rest}

    >
      <AvatarContainer>
        <ImageContainer src={user.avatar || undefined} />
        <FallbackContainer delayMs={500} >
          <img src={defaultUser} style={{
            width: "100%",
            minWidth: "100%",
            height: "100%",
            minHeight: "100%",
            objectFit: "cover"
          }} />
        </FallbackContainer>
      </AvatarContainer>
      <InfosUser className={isOpen} >
        <p>{name}</p>
        <span>{email}</span>
      </InfosUser>
    </UserComponent>
  )
};