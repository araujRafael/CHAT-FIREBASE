import React, { Attributes, HTMLAttributes } from 'react';
import { ButtonContainer } from './styled';

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode,
  props?: HTMLAttributes<HTMLElement>[]
}
const MyButton: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <ButtonContainer {...props} >
      {children}
    </ButtonContainer>
  );
}

export default MyButton;