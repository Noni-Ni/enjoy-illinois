
import styles from './Details.module.css'
import { Link, useParams } from 'react-router-dom'
import { useGetOnePost } from '../../hooks/usePosts';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { useCreateLike, useGetAllLikesByPost } from '../../hooks/useLikes';

export default function Details() {
    
    const {postId} = useParams();
    const [post, setPost ] = useGetOnePost(postId)
    const { _id } = useContext(AuthContext);
    const [likes, setLikes ] = useGetAllLikesByPost(postId);
    const createLike = useCreateLike()

    const clickLikeHandler = async(e) => {
        e.preventDefault();
        const like = await createLike(postId);
        setLikes(oldLikes => [...oldLikes, like])

    }

    const alreadyLiked = likes?.map(like => like._ownerId === _id).includes(true);
    

    return (
        <div className={styles.divDetails}>
            <article className={styles.details}>
                <img src={post.imageUrl} alt="lake" />
                <section>
                    <div className={styles.title}>
                        <h2>{post.title}</h2>
                        {_id ?
                        <>
                        {alreadyLiked ? <p>You already liked this post!</p> : <a onClick={clickLikeHandler} href="">Like me <i className="fas fa-heart"></i></a> }
                        </> : ''}
                    </div>

                    <p ><i className="far fa-compass"></i>{post.address}</p>
                    <p>{post.text}</p>
                    { likes.length > 0 
                    ? <p>{likes.length}<i className="fas fa-heart"></i></p> 
                    : <p>No likes yet.Be first!</p>}
                    
                    <p className={styles.author}>{post.author}</p>
                    
                    { post._ownerId === _id &&
                    <div className={styles.action}>
                        <Link to={`/catalog/${postId}/edit`}>Edit</Link>
                        <Link to={`/catalog/${postId}/delete`}>Delete</Link>
                    </div>}
                </section>

            </article>
        </div>
    )
}

