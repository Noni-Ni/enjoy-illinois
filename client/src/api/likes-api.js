import { get, post } from "./requester";


const BASE_URL =  'http://localhost:3030/data/likes'

export const createLike = async (postId) => {
    const response = await post(`${BASE_URL}`, {postId})
    console.log(response)
    return response;
    
}

export const getAllLikesByPost = async(postId) => {
    const result = await get(`http://localhost:3030/data/likes?where=postId%3D%22${postId}%22 `);
    //http://localhost:3030/data/likes?where=postId%3D%2285d35de1-6f2c-47a5-923f-5c938c8ed3c1%22
 
    //const posts = Object.values(result);
 
    return result;
 }