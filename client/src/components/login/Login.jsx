import { Link } from 'react-router-dom'
import styles from './Login.module.css'

import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from 'react';




const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        async ({ email, password }) => {
            if(password.length < 5){

                setError("Password should be at least 6 characters long")
                
                return;
            }
            if(email.length < 9 || email === '' || !email.includes('@')){
                
                setError('Please enter valid email')
                return;
            }
           
            try {
                await login(email, password);
                
                navigate('/')
            } catch (err) {
                setError(err.message)
                console.log(err.message)

            }

            
        }
    );
    return (
        <div className={styles.loginPage}>
            {error && <div><h2>{error}</h2></div>}
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