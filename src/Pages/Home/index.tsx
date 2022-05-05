import React from 'react';
import { PageContainer } from '../../Components/PageContainer';
import { useThemeContext } from '../../Context/ThemeContext';
// Styled
import { MainContent, AsideBar, WrapButtonSideBar } from './styled';
import MessagerComponent from '../../Components/MessagerComponent';
import HeaderApp from '../../Components/HeaderApp';
import ContactsList from '../../Components/ContactsList';
import { FaUserFriends } from 'react-icons/fa';
import { initialValues, useChatContext } from '../../Context/ChatContext';
import { initialValue } from '../../Context/AuthContext';

export const Home: React.FC = () => {
  const { isDark } = useThemeContext()
  const { currentUserChat } = useChatContext()

  return (
    <PageContainer className={`${isDark}`} >
      <AsideBar>
        <WrapButtonSideBar>
          <FaUserFriends />
        </WrapButtonSideBar>
        {/* List */}
        <ContactsList />
      </AsideBar>
      <MainContent>
        <HeaderApp />
        <MessagerComponent user={currentUserChat} />
      </MainContent>
    </PageContainer >
  );
}