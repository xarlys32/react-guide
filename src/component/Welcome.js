import { Route, Routes } from "react-router-dom";

const Welcome = () => {
    return (
    <>
        <h3>Welcome!</h3>
        <Routes>
            <Route path='/newUser' element={<p>Welcome BITCH!</p>}/>
        </Routes>
    </>
)}

export default Welcome;