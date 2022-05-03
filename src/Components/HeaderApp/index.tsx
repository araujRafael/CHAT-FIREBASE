import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import SwitchTheme from '../SwitchTheme';
import {
  AvatarContainer, FallbackContainer, ImageContainer
} from '../Avatar'

import { Header, WrapOptions, Wrapper } from './styled';
import LogOut from '../../icons/LogOut';

const HeaderApp: React.FC = () => {
  const { handleLogOut, userGoogle } = useAuthContext()
  const navigate = useNavigate()
  const avatar = userGoogle?.avatar

  return (
    <Header>
      <h1>Home</h1>
      <WrapOptions>
        <SwitchTheme />
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