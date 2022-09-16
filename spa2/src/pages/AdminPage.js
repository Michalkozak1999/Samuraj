

import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";

const AdminPage1 =() =>{
    let premmision = false
    return(
        <div>
            {premmision ? <h1>Witaj w panelu Admina</h1> : <LoginPage/> }
        </div>
    )
}
const AdminPage = () => {
   
    return(
        <div> Witaj w Panelu Admina
            <Routes>
            <Route path="" element={<AdminPage1/>}></Route>
            </Routes>

        </div>
    )
}

export default AdminPage

// 