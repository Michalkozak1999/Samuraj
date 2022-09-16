import React  from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import  "../styles/Navigation.css";
const list = [
    {name: "start", path: "/", end:true, active: false},
    {name: "proukty", path: "/products",  active: false},
    {name: "kontakt", path: "/contact",  active: false},
    {name: "panel admin", path: "/admin", active: false},
]


const Navigation =() =>{
    let activeStyle = {
        
            color: "green"
       
       
    }
    let nonactiveStyle = {
        color: "black"
    }
    const menu = list.map(item =>{
        return(
            <li key={item.name}>
                <NavLink to ={item.path} end = {item.end ? item.end : false} style={({isActive}) =>
            isActive ? activeStyle : nonactiveStyle
            
            }>
                {item.name}

                </NavLink>
            </li>
        )
    })
    return(
      <nav className="main">
          <ul>
              
                
              {menu}
             
              
              {/* <li>
              <NavLink to="/">Start</NavLink>
              </li>
              <li>
              <NavLink to="/product">Prukty</NavLink>
              </li>
              <li>
              <NavLink to="/contact">Kontakt</NavLink>
              </li>
              <li>
              <NavLink to="/admin">Panel Admina</NavLink>
              </li> */}
          </ul>
      </nav>
    )
}
export default Navigation