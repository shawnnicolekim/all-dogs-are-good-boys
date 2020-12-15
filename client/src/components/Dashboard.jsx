import React from 'react';
import { useAuth } from '../auth/Auth.jsx';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  const auth = useAuth();

  const userLogout = () => {
    auth.logout(() => history.push('/'));
  }

  return (
      <div>
        Dashboard
        <ul>
          <li>
            <Link onClick={userLogout}>Logout</Link>
          </li>
        </ul>
      </div>
  )
}

export default Dashboard;