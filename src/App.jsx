import React from 'react'
import { getPosts } from './api/PostApi';
import { useEffect } from 'react';

const App = () => {
  console.log(getPosts());

  // const getpostData = async () => {
  //   const response = await getPosts();
  //   console.log(response);
  // }

  // useEffect(() => {
  //   getPostData();
  // }, []);
  return (
    <div>App</div>
  )
}

export default App