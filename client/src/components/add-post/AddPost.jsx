import styles from './AddPost.module.css'

export default function AddPost() {
    return (
        <div>
            <h2>Welcome user123</h2>
            <p>Share your thoughts...</p>
            <div className={styles.container}>
                <form action="/action_page.php">
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className={styles.col75}>
                            <input type="text" id="title" name="title" placeholder="Title..."/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className={styles.col75}>
                            <input type="text" id="address" name="address" placeholder="Where.."/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="picture">Add picture</label>
                        </div>
                        <div className={styles.col75}>
                            <input type="text" id="imageUrl" name="imageUrl" placeholder="Your image Url.."/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="story">Your Story</label>
                        </div>
                        <div className={styles.col75}>
                            <textarea id="story" name="story" placeholder="Tell us more.." style={{height:'500px'}}></textarea>
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