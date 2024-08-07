
import styles from './Details.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetOnePost } from '../../hooks/usePosts';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { useCreateLike, useGetAllLikesByPost } from '../../hooks/useLikes';
import { remove } from '../../api/posts-api';

export default function Details() {

    const { postId } = useParams();
    const [post, setPost] = useGetOnePost(postId);
    const { _id } = useContext(AuthContext);
    const [likes, setLikes] = useGetAllLikesByPost(postId);
    const createLike = useCreateLike();
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const clickLikeHandler = async (e) => {
        e.preventDefault();
        try {
            const like = await createLike(postId);
            setLikes(oldLikes => [...oldLikes, like]);
        } catch (error) {
            console.log(error.message);
            setError(error.message)
        }


    }

    const alreadyLiked = likes?.map(like => like._ownerId === _id).includes(true);

    const deleteClickHandler = async (e) => {
        e.preventDefault();
        try {
            const isConfimed = confirm('Are you sure you want to delete this post ?');
            if (isConfimed) {
                await remove(postId)
                navigate('/catalog')
            }

        } catch (err) {
            console.log(err.message);
            setError(err.message)
        }

    }

    return (
        <div className={styles.divDetails}>
            {error && <div><h2>{error}</h2></div>}
            <article className={styles.details}>
                <img src={post.imageUrl} alt="lake" />
                <section className={styles.sectionW} >
                    <div className={styles.title}>
                        <h2>{post.title}</h2>
                        {_id ?
                            <div>
                                {alreadyLiked ? <p>You already liked this post!</p> : <a onClick={clickLikeHandler} href="">Like me <i className="fas fa-heart"></i></a>}
                            </div> : ''}
                    </div>

                    <p ><i className="far fa-compass"></i>{post.address}</p>
                    <p>{post.text}</p>
                    {likes.length > 0
                        ? <p>{likes.length}<i className="fas fa-heart"></i></p>
                        : <p>No likes yet.Be first!</p>}

                    <p className={styles.author}>{post.author}</p>

                    {post._ownerId === _id &&
                        <div className={styles.action}>
                            <Link to={`/catalog/${postId}/edit`}>Edit</Link>
                            <a onClick={deleteClickHandler} href='#' >Delete</a>
                        </div>}
                </section>

            </article>
        </div>
    )
}

