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
    const response = await get(`${BASE_URL}?sortBy=val%20desc%2C_createdOn&pageSize=1`)
    return response;
    
}

export const create = async (postData) => {
    const response = await post(`${BASE_URL}`, postData)
    return response;
    
}
