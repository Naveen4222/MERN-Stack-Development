import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'))
    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);

    }

    let isLogIn = !!token;
    console.log('isLogIn',isLogIn);


    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token')

    };


    return <AuthContext.Provider value={{ storeTokenInLS, LogoutUser , isLogIn }}>
        {children}
    </AuthContext.Provider>

}

// tackling the logout functionality




export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue;
}
