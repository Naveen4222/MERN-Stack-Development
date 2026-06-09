import { useState } from "react";

export const Contact = ()=>{

    const [contact,setContact] = useState({
        username:"",
        email:"",
        message:""
    })

    const handleInputChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]:value
        })
    }

    const handleFormSubmit = (e)=>{
        event.preventDefault(e);
        console.log(contact);
    }
    return (
        <>
       <div className="container">
                <div>
                    <img src="./images/login.png" alt="Image Loading" width="400" height="500"/>
                </div>
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="username" name="username" placeholder="Enter your username" value={contact.username} onChange={handleInputChange} />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" value={contact.email} onChange={handleInputChange} />
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="10" cols="20" value={contact.message} onChange={handleInputChange}></textarea>
                    </form>
                    <div>
                        <button type="submit" onClick={handleFormSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}