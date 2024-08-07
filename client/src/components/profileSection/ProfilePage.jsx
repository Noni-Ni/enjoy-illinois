import { useEffect, useState } from "react"
import { getRecent, getYourLastPost } from "../../api/posts-api";
import PostCard from "../post-card/PostCard";
import styles from './ProfilePage.module.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { getAllyourLikes } from "../../api/likes-api";
import { useGetOnePost } from "../../hooks/usePosts";


export default function ProfileSection() {
    const { _id , username} = useContext(AuthContext)
    const [recent, setRecent] = useState({})
    const [error, setError] = useState('')
    try {
        useEffect(() => {
            async function getRecentPost() {
                const response = await getRecent()
                const result = response[0]
                setRecent(result)
            }
            getRecentPost();
        }, [])
    } catch (error) {
       
        console.log(error.message)
        setError(error.message)
    }
    
    const [yours, setYours] = useState({})
    try {
        useEffect(() => {
            async function getYourLast() {
                const response = await getYourLastPost(_id)
                const result = response[0]
                setYours(result)
            }
            getYourLast();
        }, [])
    } catch (err) {
        
        console.log(err.message)
        setError(err.message)
    }
    
    const [liked, setLiked] = useState({})
    try {
        useEffect(() => {
            async function getLiked() {
                const response = await getAllyourLikes(_id)
                const result = response[0]
                console.log(result)
                setLiked(result)
            }
            getLiked();
        }, [])
    } catch (err) {
       
        console.log(err.message)
        setError(err.message)
    }
   
        const [post] = useGetOnePost(liked?.postId);
    
     
   

    
    
    return (
        <div className={styles.profilePage}>
            <div className={styles.heading}>
                <h1>Explore Illinois</h1>
                <p>From urban excitement and outdoor adventures to delicious food and fascinating history, Illinois is an iconic destination with something for everyone. Scroll through the regions to explore the diversity of experiences in The Middle of Everything.
                </p>
                <h2>Welcome {username}</h2>
            </div>
            <div className={styles.contentProfile}>
                <div className={styles.yours}>
                    <h3>Your last post</h3>
                    {yours?._id !== undefined
                        ? <PostCard {...yours} />
                        : <p className="no-articles">No posts yet</p>}
                </div>
                <div className={styles.recent}>
                    <h3>Most recent post</h3>

                    {recent?._id !== undefined
                        ? <PostCard {...recent} />
                        : <p className="no-articles">No posts yet</p>}

                </div>
                <div className={styles.loved}>
                    <h3>Your last loved one</h3>
                    {post?._id !== undefined 
                    ? <PostCard {...post}/>
                    : <p className="no-articles">No loved posts yet</p>}
                </div>
            </div>
            <div className={styles.allYours} ><Link to={`/catalog/yours`}>All your posts here...</Link></div>
        </div>
    )
}