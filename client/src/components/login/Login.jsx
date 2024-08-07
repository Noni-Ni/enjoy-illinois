import { Link } from 'react-router-dom'
import styles from './Login.module.css'

import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';

const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        async ({ email, password }) => {
            if(password.length < 6){
                alert("Password should be at least 6 characters long")
                return;
            }
            if(email.length < 9 || email === '' || !email.includes('@')){
                
                alert('Please enter valid email')
                return;
            }

            try {
                await login(email, password);
                navigate('/')
            } catch (err) {

                console.log(err.message)

            }


        }
    );
    return (
        <div className={styles.loginPage}>

            <div className={styles.loginContainer}>
                <h2>Please login...</h2>
                <form onSubmit={submitHandler} >
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className={styles.col75}>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter you email..."
                                value={values.email}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className={styles.col75}>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Your password here..."
                                value={values.password}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <br />
                    <div className={styles.row}>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <Link to="/register">Dont have account click here...</Link>
            </div>

        </div>
    )
}