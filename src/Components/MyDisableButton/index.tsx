import React, { HTMLAttributes } from 'react';
import { ButtonContainer } from './styled';

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode,
  props?: HTMLAttributes<HTMLElement>[]
}
const MyDisableButton: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <ButtonContainer {...props} >
      {children}
    </ButtonContainer>
  );
}

export default MyDisableButton;