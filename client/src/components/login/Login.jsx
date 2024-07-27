import styles from './Login.module.css'

export default function Login() {
    return (
        <div className={styles.loginPage}>
            
            <div className={styles.loginContainer}>
            <h2>Please login...</h2>
                <form action="/action_page.php">
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className={styles.col75}>
                            <input type="text" id="email" name="email" placeholder="Enter you email..." />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className={styles.col75}>
                            <input type="password" id="password" name="password" placeholder="Your password here..." />
                        </div>
                    </div>
                    <br />
                    <div className={styles.row}>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <a href="/register">Dont have account click here...</a>
            </div>
            
        </div>
    )
}