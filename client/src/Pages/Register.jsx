import { useState } from "react"
import './register.css'
import { useNavigate } from "react-router-dom"



export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        phone: "",
        email: "",
        password: "",

    })


    const navigate = useNavigate();


    const handleInputChange = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        })
    }
    const handleformSubmit = async (e) => {
        event.preventDefault(e);
        console.log(user);
        try {
            const response = await fetch(`http://localhost:5000/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            console.log(response)

            if (response.ok) {
                setUser({
                    username: "",
                    phone: "",
                    email: "",
                    password: "",
                });
                navigate("/login");

            }

        }
        catch (error) {
            console.log("register", error)
        }
    }

    return (
        <>
            <div className="container">
                <div>
                    <img src="./images/register.png" alt="Image Loading" />
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
                    <div>
                        <button type="submit" onClick={handleformSubmit}>Register Now</button>
                    </div>
                </div>

            </div>
        </>
    )
}