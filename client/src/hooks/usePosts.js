import { useState, useEffect } from "react";

import { create, getAll, getOne } from "../api/posts-api";

export function useGetAllPosts(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAll()
        .then(result => setPosts(result));
    }, [])

    return [
        posts,
        setPosts
    ]
}

export function useGetOnePost(postId){

    const [post, setPost] = useState({});

    useEffect(() => {
         getOne(postId)
        .then(result => setPost(result));
    }, [postId])

    return [
        post,
        setPost
    ]
}

export function useCreatePost(){
    const postCreateHandler = async (postData) => {
       const result = await create(postData)
       return result;
        
    }

    return postCreateHandler
}