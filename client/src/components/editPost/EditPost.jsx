import { useContext, useState } from 'react';
import styles from './EditPost.module.css'
import { AuthContext } from '../../contexts/authContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetOnePost } from '../../hooks/usePosts';
import { useForm } from '../../hooks/useForm';
import { update } from '../../api/posts-api';

export default function EditPost(){
    const { username } = useContext(AuthContext);
    const navigate = useNavigate();
    const {postId} = useParams();
    const [ post, setPost] = useGetOnePost(postId);
    const [error, setError] = useState('')
    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(post, async (values) => {
        if(values.title.length < 2 || values.title === ''){
            setError("Title should be at least 2 characters long")
            return;
        }
        if(values.address.length < 5 || values.address === ''){
            setError("Addresss should be at least 5 characters long")
            return;
        }

        if(values.imageUrl.length < 5 || values.imageUrl === '' || !values.imageUrl.includes('https://')){
            setError("Enter valid Url")
            return;
        }
        if(values.text.length < 20 || values.text === '' ){
            setError("Your story should be at least 20 characters long")
            return;
        }
        try {
            
            const isConfimed = confirm('Are you sure you want to update this post ?');
            if (isConfimed) {
                const updatedPost = await update(postId, values);
                navigate(`/catalog/${postId}`);
            }

        } catch (err) {
            console.log(err.message)
            setError(err.message)
        }
    }, true)
    return (
        <div className={ styles.addPost}>
            <h2>Hello {username} !</h2>
            <p>Tell us what is changed...</p>
            {error && <div><h2>{error}</h2></div>}
            <div className={styles.container}>
                <form onSubmit={submitHandler}>
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className={styles.col75}>
                            <input 
                                type="text" 
                                id="title" 
                                name="title" 
                                placeholder="Title..."
                                value={values.title}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className={styles.col75}>
                            <input 
                                type="text" 
                                id="address" 
                                name="address" 
                                placeholder="Where.."
                                value={values.address}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="picture">Add picture</label>
                        </div>
                        <div className={styles.col75}>
                            <input 
                                type="text" 
                                id="imageUrl" 
                                name="imageUrl" 
                                placeholder="Your image Url.."
                                value={values.imageUrl}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="story">Your Story</label>
                        </div>
                        <div className={styles.col75}>
                            <textarea 
                                id="story" 
                                name="text" 
                                placeholder="Tell us more.." style={{height:'500px'}}
                                value={values.text}
                                onChange={changeHandler}
                                >

                            </textarea>
                        </div>
                    </div>
                    <br/>
                        <div className={styles.row}>
                            <input type="submit" value="Submit"/>
                        </div>
                </form>
            </div>
        </div>
    )
}