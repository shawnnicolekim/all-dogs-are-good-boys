import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './Auth.jsx';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={props => {
        console.log('auth user in RR: ', auth.user);
        if (!auth.user) {
          return <Component {...props} />
        } else {
          return <Redirect to='/dashboard' />
        }
      }}
    />
  )
}

export default RestrictedRoute;