import React from 'react'
import { getPost } from '../api/PostApi';
import { useEffect, useState } from 'react';
const Post = () => {
    const [data, setData] = useState([]);

    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
        //display data
        setData(res.data)
    }

    useEffect(() => {
        getPostData();
    }, []);
    return (
        <section className="section-post">
            <ul>
                {data.map((curElem) => {
                    const { id, body, title } = curElem;

                    return (
                        <li key={id}>
                            <p>ID Number:
                                {id}</p>
                            <p>Title: {title}</p>
                            <p>Body :{body}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    );
                })}
            </ul>
            <ul>
                {data.map((curElem) => {
                    const { id, body, title } = curElem;

                    return (
                        <li key={id}>
                            <p>ID Number:
                                {id}</p>
                            <p>Title: {title}</p>
                            <p>Body :{body}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

export default Post