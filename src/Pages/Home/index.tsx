import React from 'react';
// Styled
import { PageContainer } from '../../Components/PageContainer';
import { useThemeContext } from '../../Context/ThemeContext';
// import {  } from './styled';

export const Home: React.FC = () => {
  const { isDark } = useThemeContext()

  return (
    <PageContainer className={`${isDark}`} >
      <h1>Home</h1>
    </PageContainer>
  );
}