import React from 'react';
import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';


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