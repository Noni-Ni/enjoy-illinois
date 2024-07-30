import { useEffect, useState } from "react"
import { getRecent, getYourLastPost } from "../../api/posts-api";
import PostCard from "../post-card/PostCard";
import styles from './ProfilePage.module.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";


export default function ProfileSection() {
    const { _id , username} = useContext(AuthContext)
    const [recent, setRecent] = useState({})
    useEffect(() => {
        async function getRecentPost() {
            const response = await getRecent()
            const result = response[0]
            setRecent(result)
        }
        getRecentPost();
    }, [])
    const [yours, setYours] = useState([])
    useEffect(() => {
        async function getYourLast() {
            const response = await getYourLastPost(_id)
            const result = response[0]
            setYours(result)
        }
        getYourLast();
    }, [])
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
                    {recent._id !== undefined
                        ? <PostCard {...yours} />
                        : <p className="no-articles">No posts yet</p>}
                </div>
                <div className={styles.recent}>
                    <h3>Most recent post</h3>

                    {recent._id !== undefined
                        ? <PostCard {...recent} />
                        : <p className="no-articles">No posts yet</p>}

                </div>
                <div className={styles.loved}>
                    <h3>Most loved one</h3>
                    <article>
                        <img src="/images/susanne-preisinger-9GGMSGhsMk8-unsplash.jpg" alt="lake" />
                        <section>
                            <h3>Card Title</h3>
                            <p>Lorem ipsum dolor sit inventore eaque fugit ex porro totam perspiciatis molestiae corporis. Odio!</p>
                        </section>
                        <footer><a href="">Read more..</a></footer>
                    </article>
                </div>
            </div>
            <div className={styles.allYours} ><Link to={`/catalog/authorId`}>All your posts here...</Link></div>
        </div>
    )
}