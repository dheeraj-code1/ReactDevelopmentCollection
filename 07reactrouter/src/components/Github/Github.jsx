import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((res)=>res.json())
  //     .then((data)=>{
        
  //       setData(data)
  //       console.log("DATA: ",data);
  //     })
  // },[])

  const data = useLoaderData()
  return (
    <div className="bg-gray-500 text-white px-5 py-5 text-3xl font-semibold w-full">
      {/* { console.log(data)} */}
      Github Follower: {data.followers}
      <img src={data.avatar_url} alt="" width={300} height={400} />
    </div>
  )
}


export const githubInfoLoadder = async ()=>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}