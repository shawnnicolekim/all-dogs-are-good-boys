import React from 'react';
import auth from '../auth/Auth.jsx';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  const userLogout = () => {
    auth.logout(() => {
      props.history.push('/');
    })
  }

  return (
      <div>
        Dashboard
        <ul>
          <li>
            <Link to='/' onClick={userLogout}>Logout</Link>
          </li>
        </ul>
      </div>
  )
}

export default Dashboard;