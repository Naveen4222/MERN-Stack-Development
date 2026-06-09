import { useState } from "react"

export const Login = ()=>{

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleInputChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })

    }

    const handleFormSubmit =(e)=>{
        event.preventDefault(e);
        console.log(user);
    }

    return (
        <>
       <div>
        <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={user.email} onChange={handleInputChange} />
             <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" value={user.password} onChange={handleInputChange}/>
        </form>
        </div>
        <div></div>
        <button type="submit" onClick={handleFormSubmit}>Login</button>

       </div>
        </>
    )
}