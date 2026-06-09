import { NavLink } from "react-router-dom";
import './NavBar.css'
export const NavBar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <NavLink to="/">Naveen Kaushik</NavLink>
                    </div>

                    <nav >
                        <ul >
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/about">ABOUT</NavLink></li>
                            <li><NavLink to="/service">SERVICE</NavLink></li>
                            <li><NavLink to="/contact">CONTACT US</NavLink></li>
                            <li><NavLink to="/register">REGISTER</NavLink></li>
                            <li><NavLink to="/login">LOGIN</NavLink></li>

                        </ul>
                    </nav>
                </div>

            </header>

        </>
    )
}