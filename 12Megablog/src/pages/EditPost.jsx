import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { PostForm,Container } from '../components';

function EditPost(props) {
  const [post, setPost]= useState([])
  const navigate = useNavigate()
  const {slug} = useParams() 
  useEffect(()=>{
    if (slug) {
      appwriteService.getPost(slug).then((post)=>{
        if (post) {
          setPost(post)
        }else{
          navigate('/')
        }
      })
      
    }
  },[slug,navigate])
  return post?(
    <div>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ):null
}

export default EditPost;