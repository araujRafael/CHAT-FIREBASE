import React, { Attributes, Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from 'react';
import { newUserGoogleTypes } from '../../Context/AuthContext/types';
import { useChatContext } from '../../Context/ChatContext';
import { auth, db, firebase } from '../../Database';
import { AvatarContainer, FallbackContainer, ImageContainer } from '../Avatar';

import { ContactListContainer, InfosUser, UserComponent } from './styled';

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
  let name = user.name.slice(0, 25);
  let email = user.email.slice(0, 25);

  return (
    <UserComponent
      {...rest}

    >
      <AvatarContainer>
        <ImageContainer src={user.avatar || undefined} />
        <FallbackContainer delayMs={500} >
          user
        </FallbackContainer>
      </AvatarContainer>
      <InfosUser className={isOpen} >
        <p>{name}</p>
        <span>{email}</span>
      </InfosUser>
    </UserComponent>
  )
}