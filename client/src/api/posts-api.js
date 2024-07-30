import { get, post } from "./requester"

const BASE_URL = 'http://localhost:3030/data/posts'

export const getAll = async() => {
   const result = await get( BASE_URL );

   //const posts = Object.values(result);

   return result;
}

export const getOne = async (postId) => {
    const response = await get(`${BASE_URL}/${postId}`)
    return response;
    
}

export const getRecent = async () => {
    const response = await get(`${BASE_URL}?sortBy=_createdOn%20desc&offset=0&pageSize=1`)
    return response;
    
}

export const create = async (postData) => {
    const response = await post(`${BASE_URL}`, postData)
    return response;
    
}

export const getYourLastPost = async(userId) => {

    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        

    })
    const result = await get(`http://localhost:3030/data/posts?where=_ownerId%3D%2235c62d76-8152-4626-8712-eeb96381bea8%22&sortBy=_createdOn%20desc&offset=0&pageSize=1`);
    
    return result;
}
