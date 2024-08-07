import styles from './AddPost.module.css'
import { useNavigate } from 'react-router-dom'

import { useForm } from "../../hooks/useForm"

import { useCreatePost } from '../../hooks/usePosts'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

const initialValues = {
    title: '',
    address: '',
    imageUrl: '',
    text: ''
}

export default function AddPost() {
    const { username } = useContext(AuthContext);
    const navigate = useNavigate()
    const createPost = useCreatePost();
    const createHandler = async (values) => {
        if(values.title.length < 2 || values.title === ''){
            alert("Title should be at least 2 characters long")
            return;
        }
        if(values.address.length < 5 || values.address === ''){
            alert("Addresss should be at least 5 characters long")
            return;
        }
        if(values.imageUrl.length < 5 || values.imageUrl === '' || !values.imageUrl.includes('https://')){
            alert("Enter valid Url")
            return;
        }
        if(values.text.length < 20 || values.text === '' ){
            alert("Your story should be at least 20 characters long")
            return;
        }
        try {
            const newValues = {...values, author: username}
            const { _id } = await createPost(newValues)
            
            navigate(`/catalog/${_id}`)
        } catch (error) {
            //set error state and display error
            console.log(error.message)
        }

    }
    const { values, submitHandler, changeHandler } = useForm(initialValues, createHandler)
    return (
        <div className={ styles.addPost}>
            <h2>Welcome {username} !</h2>
            <p>Share your thoughts...</p>
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