import React from 'react';
import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';


function LogoutBtn(props) {
 const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {
        dispatch(logout())
        navigate("/")
    })
}
  
  return (
    <div>
      <Button
      children='Logout'
       onClick = {logoutHandler}
      />
    </div>
  );
}

export default LogoutBtn;