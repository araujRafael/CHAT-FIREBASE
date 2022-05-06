import React, { useState } from 'react';
import { PageContainer } from '../../Components/PageContainer';
import { useThemeContext } from '../../Context/ThemeContext';
// Styled
import { MainContent, AsideBar, WrapButtonSideBar } from './styled';
import MessagerComponent from '../../Components/MessagerComponent';
import HeaderApp from '../../Components/HeaderApp';
import ContactsList from '../../Components/ContactsList';
import { FaUserFriends } from 'react-icons/fa';
import { useChatContext } from '../../Context/ChatContext';
import { IoClose } from 'react-icons/io5'

export const Home: React.FC = () => {
  const { isDark } = useThemeContext()
  const { currentUserChat } = useChatContext()
  const [toggleBar, setToggleBar] = useState<boolean>(false)
  let isOpen = toggleBar ? "open" : "";

  return (
    <PageContainer className={`${isDark}`} >
      <AsideBar
        className={isOpen}
      >
        <WrapButtonSideBar>
          <p className='name-header' >Contact list</p>
          <FaUserFriends className='contact-icon' />
          <IoClose
            className='close-icon'
            onClick={() => setToggleBar(!toggleBar)}
          />
        </WrapButtonSideBar>
        {/* List */}
        <ContactsList
          isOpen={isOpen}
          toggleBar={toggleBar}
          setToggleBar={(e) => setToggleBar(e)}
        />
      </AsideBar>
      <MainContent>
        <HeaderApp
          setToggleBar={(e) => setToggleBar(e)}
        />
        <MessagerComponent user={currentUserChat} />
      </MainContent>
    </PageContainer >
  );
}