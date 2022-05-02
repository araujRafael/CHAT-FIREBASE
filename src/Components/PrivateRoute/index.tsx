import React, { ReactNode } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';

// import { Container } from './styles';

interface PrivateRouteProps {
  element: React.FC;
}

export const PrivateRoute: any = ({ element }: PrivateRouteProps) => {
  const { authenticated } = useAuthContext()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!authenticated) {
      navigate('/')
    }
  }, [authenticated])

  if (authenticated) {
    return element
  }

}