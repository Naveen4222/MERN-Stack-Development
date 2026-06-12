import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");


    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
        

    }

    let isLogIn = !!token;
    console.log('isLogIn', isLogIn);


    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token')

    };

    //JWT Authentication - currently login user data
    const useAuthentication = async () => {
        try {
            
            const response = await fetch(`http://localhost:5000/user`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
                

            } 


        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        useAuthentication();
    }, [])




    return <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLogIn ,user}}>
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
