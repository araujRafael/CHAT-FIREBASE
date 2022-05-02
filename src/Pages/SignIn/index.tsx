import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Styled
import { PageContainer } from '../../Components/PageContainer';
import { useAuthContext } from '../../Context/AuthContext';
import { useThemeContext } from '../../Context/ThemeContext';
// import {  } from './styled';


export const SignIn: React.FC = () => {
  // Hooks
  const { isDark, setChangeTheme, changeTheme } = useThemeContext()
  const { authenticated, setAuthenticated, signinWithGoogle } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated])

  return (
    <PageContainer className={`${isDark}`} >
      <h1>Signin</h1>
      <button
        onClick={() => setChangeTheme(!changeTheme)}
      >
        Change theme
      </button>

      <button
        onClick={() => {
          // setAuthenticated(!authenticated)
          // navigate('/home')
          signinWithGoogle()
        }}
      >
        Signin
      </button>


    </PageContainer>
  );
}