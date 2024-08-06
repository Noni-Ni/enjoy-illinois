import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";


export default function GuestGuard(){

    const { isAuthenticated } = useContext(AuthContext);
    if(isAuthenticated){
        return <Navigate to={'/catalog'} />
    }
    return (
        <>
            <Outlet/>
        </>
    )
}