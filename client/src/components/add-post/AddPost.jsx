import styles from './AddPost.module.css'
import { useNavigate } from 'react-router-dom'

import { useForm } from "../../hooks/useForm"

import { useCreatePost } from '../../hooks/usePosts'

const initialValues = {
    title: '',
    address: '',
    imageUrl: '',
    text: ''
}

export default function AddPost() {
    const navigate = useNavigate()
    const createPost = useCreatePost();
    const createHandler = async (values) => {
        try {
            const { _id } = await createPost(values)
            
            navigate(`/catalog/${_id}`)
        } catch (error) {
            //set error state and display error
            console.log(error.message)
        }

    }
    const { values, submitHandler, changeHandler } = useForm(initialValues, createHandler)
    return (
        <div>
            <h2>Welcome user123</h2>
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