import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import styles from './Register.module.css'


import {  useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";


const initialValues = { email: '', password: '', rePass: ''};

export default function Register() {
    const [error, setError] = useState('')
    const register = useRegister();
    const navigate = useNavigate();
    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        async ({ email, password, rePass }) => {
            

            if (password !== rePass) {
                setError('Passwords dont match')
                alert("Passwords dont match")
                
                return;
            }
            
            try {
                await register(email, password);
                navigate('/')
            } catch (err) {
                setError(err.message)
                console.log(err.message)
            }
        }
    );
    return (
        <div className={styles.loginPage}>
            
            <div className={styles.loginContainer}>
            <h2>Create your account...</h2>
            {error &&
                        <p>
                            <span style={ {fontSize: "18px" , color: "red"}} >{error}</span>
                        </p>}
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
                    <div className={styles.row}>
                        <div className={styles.col25}>
                            <label htmlFor="rePass">Repeat Your Password</label>
                        </div>
                        <div className={styles.col75}>
                            <input 
                                type="password" 
                                id="rePass" 
                                name="rePass" 
                                placeholder="Repeat your password..." 
                                value={values.rePass}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <br />
                    <div className={styles.row}>
                        <input type="submit" value="Submit" />
                    </div>
                    
                    
                </form>
                <Link to="/login">Already have account...</Link>
            </div>
            
        </div>
    )
}