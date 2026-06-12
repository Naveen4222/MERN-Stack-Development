import { NavLink } from "react-router-dom";
import './NavBar.css'
import { useAuth } from "../../store/auth";

export const NavBar = () => {

    const { isLogIn } = useAuth();
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <NavLink to="/">Naveen Kaushik</NavLink>
                    </div>

                    <nav >
                        <ul >
                            <li>
                                <NavLink to="/">HOME</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">ABOUT</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service">SERVICE</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">CONTACT US</NavLink>
                            </li>
                            {isLogIn ? (<li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li> ):
                                <>

                                    <li>
                                        <NavLink to="/register">REGISTER</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login">LOGIN</NavLink>
                                    </li>
                                </>
                            }


                        </ul>
                    </nav>
                </div>

            </header>

        </>
    )
}