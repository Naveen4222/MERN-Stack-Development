import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    });


    const [userData, setUserData] = useState(true);

    const { user } = useAuth();
    console.log(user);



    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }


    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(contact);
        try {
            const response = await fetch(`http://localhost:5000/contact`, {
                method: "Post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            });
            console.log(contact);

            if (response.ok) {
                setContact({
                    username: "",
                    email: "",
                    message: ""
                });
            }
        }
        catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <div className="container">
                <div>
                    <img src="./images/login.png" alt="Image Loading" width="400" height="500" />
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
                        <button type="submit" onClick={handleFormSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}