import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home(props) {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    appwriteService.getPosts().then((posts) => posts?setPosts(posts):setPosts([]))
  },[])

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
          <Container>
              <div className="flex flex-wrap">
                  <div className="p-2 w-full">
                      <h1 className="text-2xl font-bold hover:text-gray-500">
                          Login to read posts
                      </h1>
                  </div>
              </div>
          </Container>
      </div>
  )
  }
  return ( 
    <div className='py-8 w-full'>
      <Container>
        <div  className='flex flex-wrap'>
        {posts.map((post)=>(
          <div key={post.$id}>
            <PostCard post={post} />
          </div>
        ))}

        </div>
      </Container>
    </div>
  )
}

export default Home;