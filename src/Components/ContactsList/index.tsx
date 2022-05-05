import React, { useEffect, useState } from 'react';
import { newUserGoogleTypes } from '../../Context/AuthContext/types';
import { useChatContext } from '../../Context/ChatContext';
import { auth, db, firebase } from '../../Database';
import { AvatarContainer, FallbackContainer, ImageContainer } from '../Avatar';

import { ContactListContainer, UserComponent } from './styled';

type UserList = firebase.firestore.DocumentData & newUserGoogleTypes;

const ContactsList: React.FC = () => {
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
        listContacts?.map((x, i) => <ContactUser key={i} user={x} />)
      }
    </ContactListContainer>
  );
}

export default ContactsList;

interface ContactUser {
  user: newUserGoogleTypes
}
const ContactUser: React.FC<ContactUser> = ({ user }: ContactUser) => {
  // Contexts
  const { setCurrentUserChat } = useChatContext()

  return (
    <UserComponent
      onClick={() => {
        setCurrentUserChat(user);
      }}
    >
      <AvatarContainer>
        <ImageContainer src={user.avatar || undefined} />
        <FallbackContainer delayMs={500} >
          user
        </FallbackContainer>
      </AvatarContainer>
    </UserComponent>
  )
}