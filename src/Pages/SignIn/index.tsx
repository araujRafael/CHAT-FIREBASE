import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../Components/MyButton';
// Styled
import { PageContainer } from '../../Components/PageContainer';
import { useAuthContext } from '../../Context/AuthContext';
import { useThemeContext } from '../../Context/ThemeContext';
import { GoogleButton, Wrapper } from './styled';
// icons
import { FcGoogle } from 'react-icons/fc'


export const SignIn: React.FC = () => {
  // Hooks
  const { isDark } = useThemeContext()
  const { authenticated, signinWithGoogle } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated])

  return (
    <PageContainer className={`${isDark}`} >
      <Wrapper>
        <GoogleButton
          onClick={() => {
            signinWithGoogle()
          }}
        >
          <FcGoogle />
          Sign-In with Google.
        </GoogleButton>
      </Wrapper>
    </PageContainer>
  );
} 