import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import {  useGetAllYourPosts } from "../../hooks/usePosts";
import styles from './AllYourPosts.module.css'
import PostCard from "../post-card/PostCard";




export default function AllYourPosts(){
    const {_id} = useContext(AuthContext);
    
  
        const [posts ] = useGetAllYourPosts(_id);
    
    
    
    return(
        <div className={styles.allPosts}>
            <h2>Browse Activities & Attractions in Illinois</h2>
            <p>Discover amusement parks, museums, parks & forests, outdoor activities, history, dining, unmissable events and so much more in The Middle of Everything!</p>
            <div className={styles.container}>
            {posts.length > 0 
                ? posts.map(post =>  <PostCard key={post._id} {...post} />) 
                : <h3 className="no-articles">No posts yet</h3>}
                

            </div>
        </div>
    )
}