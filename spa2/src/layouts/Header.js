import React from "react";
import img1 from "../images/heder1.jpg";
import img2 from "../images/heder2.jpg";
import img3 from "../images/heder3.png";
import "../styles/Heder.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"



const Heder = () => {
    const images = [img1, img2, img3]
    const index = Math.floor(Math.random()*3 )
   const img = images[index]
   //to zadziała tylko na zwykłe imagine (tutaj wylosuje sie tylko raz co jest słabe dla nas)
    
   const Img1 = () => {
    return(
        <img src={img1} alt="heder"></img>
    )
}

const Img2 = () => {
    return(
        <img src={img2} alt="warszawa"></img>
    )
}
const Img3 = () => {
    return(
        <img src={img3} alt="warszawa"></img>
    )
}
    return (
      

<div>

<Routes>
<Route  path="/" end  element={<Img1></Img1>} />
<Route  path="/contact"  element={<Img2></Img2>} />
<Route  path="/products"  element={<Img3></Img3>} />
<Route  path="/admin"  element={<Img1></Img1>} />
<Route  element={<Img1></Img1>} />

</Routes>

</div>
  
      
    )
}
export default Heder