import React from 'react';
import { useContext } from 'react';
import UserContext from '../UserContext/UserContext';

function Profile() {
  const {user} = useContext(UserContext)
 
      if (!user) return <div> Please Login</div>
        
      return (
        <div>
          User: {user.username}
          <br />
          Password: {user.password}
        </div>
      )
   
}

export default Profile; 