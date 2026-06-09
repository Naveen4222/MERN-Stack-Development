import { NavLink } from "react-router-dom"
export const Error = () => {
    return (
        <>
            <div className="  justify-content-center ">
                <h1>404</h1>
                <p>Page Not found</p>
                <NavLink to="/">Return to Home</NavLink>
                <NavLink to="/contact">Report the Problem</NavLink>
            </div>
        </>
    )
}