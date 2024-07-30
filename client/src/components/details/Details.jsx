
import styles from './Details.module.css'
import { Link, useParams } from 'react-router-dom'
import { useGetOnePost } from '../../hooks/usePosts';

export default function Details() {
    
    const {postId} = useParams();
    const [post, setPost ] = useGetOnePost(postId)

    return (
        <div>
            <article className={styles.details}>
                <img src={post.imageUrl} alt="lake" />
                <section>
                    <div className={styles.title}>
                        <h2>{post.title}</h2>
                        <a href="">Like me <i className="fas fa-heart"></i></a>
                    </div>

                    <p ><i className="far fa-compass"></i>{post.address}</p>
                    <p>{post.text}</p>
                    <p className={styles.author}>{post._ownerId}</p>
                    

                    <div className={styles.action}>
                        <Link to={`/catalog/${postId}/edit`}>Edit</Link>
                        <Link to={`/catalog/${postId}/delete`}>Delete</Link>
                    </div>
                </section>

            </article>
        </div>
    )
}