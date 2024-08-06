import { createContext, useState } from "react";

export const AuthContext = createContext({
    _id: '',
    username: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null
});

export function AuthContextProvider(props) {

    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken)
        setAuthState(state);
    }

    const logout = () => {
        setAuthState(null)
        localStorage.setItem('accessToken', '')
    }

    const contextData = {
        _id: authState?._id,
        username: authState?.username,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )

}