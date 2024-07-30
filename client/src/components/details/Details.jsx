
import styles from './Details.module.css'
import { Link, useParams } from 'react-router-dom'
import { useGetOnePost } from '../../hooks/usePosts';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

export default function Details() {
    
    const {postId} = useParams();
    const [post, setPost ] = useGetOnePost(postId)
    const { _id } = useContext(AuthContext);

    return (
        <div className={styles.divDetails}>
            <article className={styles.details}>
                <img src={post.imageUrl} alt="lake" />
                <section>
                    <div className={styles.title}>
                        <h2>{post.title}</h2>
                        <a href="">Like me <i className="fas fa-heart"></i></a>
                    </div>

                    <p ><i className="far fa-compass"></i>{post.address}</p>
                    <p>{post.text}</p>
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

