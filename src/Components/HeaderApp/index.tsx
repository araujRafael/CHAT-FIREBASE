import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SwitchTheme from '../SwitchTheme';
import {
  AvatarContainer, FallbackContainer, ImageContainer
} from '../Avatar'
import {
  Header,
  Input,
  ListUserContainer,
  SearchContainer,
  UserContainer,
  WrapAction,
  WrapIcon,
  WrapImage,
  WrapName,
  WrapOptions,
  Wrapper,
  WrapSearch
} from './styled';
import LogOut from '../../icons/LogOut';
import { BsSearch } from 'react-icons/bs';
import { FaUserPlus, FaUserCheck, FaUserFriends } from 'react-icons/fa';
import { auth, db, firebase } from '../../Database';
import { useAuthContext, initialValue } from '../../Context/AuthContext';
import {
  newUserGoogleTypes
} from '../../Context/AuthContext/types'
import MyButton from '../MyButton';
import { toast } from 'react-toastify';
import MyDisableButton from '../MyDisableButton';

type userGoogleType = newUserGoogleTypes & firebase.firestore.DocumentData;

interface HeaderAppTypes {
  setToggleBar: React.Dispatch<SetStateAction<boolean>>
}

const HeaderApp: React.FC<HeaderAppTypes> = ({
  setToggleBar
}: HeaderAppTypes) => {
  const { handleLogOut, userGoogle } = useAuthContext()
  const navigate = useNavigate()
  const avatar = userGoogle?.avatar
  // State
  const [userFound, setUserFound] = useState<userGoogleType>(
    initialValue.userGoogle
  )

  // Handle functions
  async function searchByUsers(arg: string): Promise<void> {
    let userRef = await db.collection("users").get()
    let docs = userRef.docs;
    let findUser = docs.find(x => {
      let data = x.data()
      return data.email === arg
    })
    if (findUser?.exists) {
      let user: userGoogleType | any = findUser.data()
      setUserFound(user);
    } else {
      setUserFound(initialValue.userGoogle)
    }
  }

  return (
    <Header>
      <FaUserFriends
        className='contactList-btn'
        onClick={() => setToggleBar(true)}
      />
      <WrapSearch>
        <SearchContainer>
          <Input
            placeholder='Search for contacts'
            onChange={e => {
              let target = e.target.value
              searchByUsers(target);
            }}
          />
          <WrapIcon>
            <BsSearch />
          </WrapIcon>
        </SearchContainer>
        {/* User found here */}
        {
          userFound.id && (
            <ListUserContainer>
              <UserContact user={userFound} setUserFound={setUserFound} />
            </ListUserContainer>
          )
        }
      </WrapSearch>
      <WrapOptions>
        <Wrapper>
          <AvatarContainer>
            {
              avatar ? (
                <ImageContainer src={avatar} />
              ) : (
                <FallbackContainer delayMs={300}>
                  {'none'}
                </FallbackContainer>
              )
            }
          </AvatarContainer>
          <div className="options">
            <span>
              <SwitchTheme />
            </span>
            <span
              onClick={() => {
                handleLogOut()
                navigate('/')
              }}
            >
              <LogOut data-width={25} />
              Logout
            </span>
          </div>
        </Wrapper>
      </WrapOptions>
    </Header>
  );
}

export default HeaderApp;

interface UserContact {
  user: userGoogleType
  setUserFound: Dispatch<SetStateAction<userGoogleType>>
}
const UserContact: React.FC<UserContact> = ({ user, setUserFound }: UserContact) => {
  let emailLength = user.email!.length
  let restEamil = emailLength > 25 ? " ..." : ""
  let email = user.email?.slice(0, 25) + restEamil
  let nameLength = user.name!.length
  let restName = nameLength > 25 ? " ..." : ""
  let name = user.name?.slice(0, 25) + restName
  // State
  const [isAdded, setIsAdded] = useState<boolean>(false)

  // Effects
  useEffect((): any => {
    const myId = auth.currentUser?.uid
    const subscribe = db
      .collection("contacts")
      .doc(myId)
      .collection("contact").onSnapshot(x => {
        let docs = x.docs
        let hasIsAdded = docs.find(y => y.data().id === user.id)
        hasIsAdded ? setIsAdded(true) : setIsAdded(false)
      })
      ;
    return () => subscribe
  }, [])

  // Handle function
  async function addToContactList(): Promise<void> {
    const myId = auth.currentUser?.uid
    db.collection('contacts')
      .doc(myId)
      .collection('contact')
      .add(user)
      .then(() => {
        toast.success("User added to your list!")
        setUserFound(initialValue.userGoogle)
      })
      .catch(err => {
        toast.error("Error adding user!")
        console.log(err);
      })
  }

  return (
    <UserContainer>
      <WrapImage>
        <AvatarContainer>
          <ImageContainer src={user.avatar || undefined} />
          <FallbackContainer delayMs={300} />
        </AvatarContainer>
      </WrapImage>
      <WrapName>
        <p>{name}</p>
        <span>{email}</span>
      </WrapName>
      <WrapAction>
        {isAdded
          ? (
            <MyDisableButton>
              <FaUserCheck />
            </MyDisableButton>
          )
          : (<MyButton
            onClick={addToContactList}
          >
            <FaUserPlus />
          </MyButton>)}
      </WrapAction>
    </UserContainer>
  )
}