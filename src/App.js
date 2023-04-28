import React from "react"; 
import SignUp from "./Components/SignUp/Signup";
import Login from "./Components/LogIn/Login";
import { Route,Routes,Navigate } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/" element={<Navigate to="/signup"/>}/>
            </Routes>
        </div>
    );
}

export default App;