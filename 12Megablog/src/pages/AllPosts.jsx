import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import Container from '../components/container/Container';
import { PostCard } from '../components';
import { useSelector } from 'react-redux';

function AllPosts(props) {
  const [posts,setPosts] = useState([])
  const userData = useSelector((state) => state.auth.userData)
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
          setPosts(posts.documents.filter((post) => post.userId === userData.$id ))
        
      }
  })
  }, [])
  
  console.log("Posts ",posts);
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts?.map((post)=>(
              <div className='p-2 w-1/4' key={post.$id}>
                <PostCard {...post} />

              </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;