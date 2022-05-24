import { Link, Outlet, Route, Routes } from "react-router-dom";

const Welcome = () => {
    return (
    <>
        <h3>Welcome!</h3>
        <Link to={'newUser'}>New User</Link>
        <Outlet />
    </>
)}

export default Welcome;