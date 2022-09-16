import React  from "react";
import { Route, Routes, Outlet, useNavigate, useParams } from "react-router-dom";
import "../styles/Fotter.css"
const Footer =() =>{
    const outlet = <Outlet/>
   
    

    
    const Home = () => {
        return (
            <div className="footer">
            <p>Jesteś na <span>stronie glównej</span></p>
            </div>
        )
    }
    const Home2 = () => {
        
        const parsm = useParams()
      
        return (
            <div className="footer">
            <p>Jesteś na <span>{parsm.id} </span></p>
            </div>
        )
    }
    const Home3 = () => {
        const parsm2 = useParams()
        
        return (
            <div className="footer">
            <p>Jesteś na <span>{parsm2.id}</span></p>
            </div>
        )
    }
        return(
        <div>
            <h2>Stopka</h2>
            <Routes>
                <Route path='/' end="true" element={<Home/>} >
                </Route>
                <Route path='/:id' element={<Home2/>} >
                </Route>
                <Route path='/products/:id' element={<Home3/>} >
                </Route>
            </Routes>


        
            <Outlet/>
             
        </div>
    )
}
export default Footer