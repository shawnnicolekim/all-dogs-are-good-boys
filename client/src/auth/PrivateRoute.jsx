import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './Auth.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log(auth.isAuthenticated());
        if (auth.isAuthenticated()) {
          return <Component {...props} />
        } else {
          return <Redirect to='/login' />
        }
      }}
    />
  )
}

export default PrivateRoute;

/*
When using routes w/ children:
ex:
<ProtectedRoute path="/homepage">
           <Component1/>
          <Component2/>
 </ProtectedRoute>

then do this:

const ProtectedRoute = ({children,...rest}) =>{
    return (
        <Route {...rest}>
            <>{children}</>
        </Route>
    )
}
*/