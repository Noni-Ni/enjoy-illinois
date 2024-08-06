import { useEffect, useState } from "react";
import { createLike, getAllLikesByPost } from "../api/likes-api";

export function useCreateLike(){
    const likeCreate = async (postId) => {
       const result = await createLike(postId)
       return result;
        
    }

    return likeCreate
}

export function useGetAllLikesByPost(postId){

    const [likes, setLikes] = useState([]);

    useEffect(() => {
        getAllLikesByPost(postId)
        .then(result => setLikes(result));
    }, [])

    return [
        likes,
        setLikes
    ]
}
 
