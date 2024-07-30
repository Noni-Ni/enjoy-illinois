import { post ,get } from "./requester";


const BASE_URL = 'http://localhost:3030/users';

export async function login(email, password){
    
    const authData = await post(`${BASE_URL}/login`, {email, password});
    

    return authData;
}

export async function register(email, password, username){
    const authData = await post(`${BASE_URL}/register`, {email, password, username});

    return authData;
}

export async function logout(){
    await get(`${BASE_URL}/logout`);
}