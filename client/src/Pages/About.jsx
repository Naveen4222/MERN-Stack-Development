import { useAuth } from "../store/auth";
export const About = () => {
    const {user} = useAuth();
    console.log(user);
    console.log(user.username);   
    return (
        <>
            <p>Welcome, {user?user.username:"Welcome to our website"}</p>
            <h1>This is About Page</h1>
        </>
    )
}