import { useState } from "react"
import './register.css'

export const Register = () => {
    const [user,setUser]= useState({
        usernamer:"",
        phone:"",
        email:"",
        password:"",
        
    })
   
const handleformSubmit = (e)=>{
    event.preventDefault(e);

}
const handleInputChange = (e)=>{
    console.log(e);
    e.target(value);

}

    return (
        <>
            <div className="container">
                <div>
                    <img src="E:\MERN\client\src\assets\photo-1491466424936-e304919aada7.png" alt="Image Loading" />
                </div>
                <div className="container">
                    <form action="">
                        <label htmlFor="username">USERName</label>
                        <input type="text" name="username" id="username" value={user.usernamer} onChange={handleInputChange} />
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name="phone" id="phone" value={user.phone}/>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" value={user.email} />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={user.password} />
                        
                    </form>
                </div>
                <div>
                    <button type="submit" onClick={handleformSubmit}>Register Now</button>
                </div>
            </div>
        </>
    )
}