import React from 'react';
import { logout } from '../../store/authSlice';
import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';


function LogoutBtn(props) {

  const dispatch = useDispatch()
  authService.logout().then(()=>{
    dispatch(logout)
  }).catch((error)=>{
    console.log("Header :: LogoutBtn :: error",error);
  })
  
  return (
    <div>
      
    </div>
  );
}

export default LogoutBtn;