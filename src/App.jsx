import React from 'react'
import { getPost } from './api/PostApi';
import { useEffect } from 'react';

const App = () => {
  // console.log(getPosts());

  // In react if you want to call an api then you have to use useEffect hook. we cant call api directly in react component. if we call api directly then it will create infinite loop. so we have to use useEffect hook to call api.

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
  }

  useEffect(() => {
    getPostData();
  }, []);
  return (
    <div>App</div>
  )
}

export default App
