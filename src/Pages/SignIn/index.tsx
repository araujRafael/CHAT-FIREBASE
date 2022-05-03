import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../Components/MyButton';
// Styled
import { PageContainer } from '../../Components/PageContainer';
import { useAuthContext } from '../../Context/AuthContext';
import { useThemeContext } from '../../Context/ThemeContext';
// import {  } from './styled';


export const SignIn: React.FC = () => {
  // Hooks
  const { isDark, setChangeTheme, changeTheme } = useThemeContext()
  const { authenticated, signinWithGoogle } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated])

  return (
    <PageContainer className={`${isDark}`} >
      <h1>Signin</h1>
      <MyButton
        onClick={() => setChangeTheme(!changeTheme)}
      >
        Change theme
      </MyButton>

      <MyButton
        onClick={() => {
          signinWithGoogle()
        }}
      >
        Signin
      </MyButton>
    </PageContainer>
  );
} 