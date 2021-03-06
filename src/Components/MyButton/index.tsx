import React, { HTMLAttributes } from 'react';
import { ButtonContainer } from './styled';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  props?: HTMLAttributes<HTMLButtonElement>[]
}
const MyButton: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <ButtonContainer {...props} >
      {children}
    </ButtonContainer>
  );
}

export default MyButton;