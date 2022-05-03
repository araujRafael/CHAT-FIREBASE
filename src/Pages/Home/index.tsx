import React from 'react';
import { PageContainer } from '../../Components/PageContainer';
import { useThemeContext } from '../../Context/ThemeContext';
// Styled
import { MainContent, AsideBar } from './styled';
import MessagerComponent from '../../Components/MessagerComponent';
import HeaderApp from '../../Components/HeaderApp';

export const Home: React.FC = () => {
  const { isDark } = useThemeContext()

  return (
    <PageContainer className={`${isDark}`
    } >
      <AsideBar>
      </AsideBar>
      <MainContent>
        <HeaderApp />
        <MessagerComponent content={{}} />
      </MainContent>
    </PageContainer >
  );
}