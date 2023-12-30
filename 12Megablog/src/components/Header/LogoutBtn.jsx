import React from 'react';
import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import {Button} from '../index';
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
      <button
    className='inline-bock text-white font-bold px-6 py-2 duration-200 bg-blue-600 hover:bg-blue-100 hover:text-black rounded-lg'
    onClick={logoutHandler}
    >Logout</button>
    </div>
  );
}

export default LogoutBtn;