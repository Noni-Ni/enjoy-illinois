import { Navigate} from 'react-router-dom'
import { useLogout } from '../../hooks/useAuth'
import { useState } from 'react';

export default function Logout(){

    const logout = useLogout();
    const [error, setError] = useState('')
    try {
        logout();
    } catch (err) {
        console.log(err.message)
        setError(err.message)
    }
    
    return (
        <Navigate to={'/'} />
    )
}