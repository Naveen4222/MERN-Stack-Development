import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })

    }

    const handleFormSubmit =async (e) => {
        event.preventDefault(e);
        console.log(user);

        try {
            const response = await fetch(`http://localhost:5000/login`,{
                method:"post",
                headers :{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            console.log("login", response);

            if(response.ok){
                alert("login succesfully")
                setUser({
                    email:"",
                    password:""
                })
                navigate("/");
                  
            }
            else{
                alert("Invalid Credentials")
            }

          
            
        } catch (error) {
            console.log("login", error)
            
        }
    }

    return (
        <>
            <div className="container">
                <div>
                    <img src="./images/login.png" alt="Image Loading" width="400" height="500"/>
                </div>
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" value={user.email} onChange={handleInputChange} />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" value={user.password} onChange={handleInputChange} />
                    </form>
                    <div>
                        <button type="submit" onClick={handleFormSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}