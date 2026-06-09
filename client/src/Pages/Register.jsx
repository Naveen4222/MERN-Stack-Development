import { useState } from "react"
import './register.css'

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",

    })


    const handleInputChange = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        })
    }
    const handleformSubmit = (e) => {
        event.preventDefault(e);
        console.log(user);

    }

    return (
        <>
            <div className="container">
                <div>
                    <img src="E:\MERN\client\src\assets\photo-1491466424936-e304919aada7.png" alt="Image Loading" />
                </div>
                <div className="container">
                    <form onSubmit={handleformSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" value={user.username} onChange={handleInputChange} />
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name="phone" id="phone" value={user.phone} onChange={handleInputChange} />
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleInputChange} />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={user.password} onChange={handleInputChange} />

                    </form>
                </div>
                <div>
                    <button type="submit" onClick={handleformSubmit}>Register Now</button>
                </div>
            </div>
        </>
    )
}