import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch,  NavLink, Route, Routes } from "react-router-dom";
console.log("XD")


const Home = () => {
  // console.log("rednderuje")
  return (
    <h1>Strona startowa</h1>
  )
}
const News = () => {
  return (
    <h1>Aktualności</h1>
  )
}
const Contact = () => {
  return (
    <h1>Kontakt</h1>
  )
}


const ErrorPage = () =>{
  return(
    <h1>Strona nie instnieje</h1>
  )
}

class App extends Component {
  render() {
    return (

      <Router>

        <div>


          <header>

            <nav>

              {/* navlink zwiera sprawdzenie Url  */}
              <ul>
                {/* <li><a href ="/">Start</a></li>
           <li><a href ="/news">Aktualności</a></li> */}
                {/* <li><a href ="/contact">Kontakt</a></li> */}
                <li><NavLink 
          
                to="/ty"
                
                
                >
                  
                  
                  Start</NavLink></li>

                <li><NavLink to="news" >Aktualności</NavLink></li>
                <li><NavLink to="contact" >Kontakt</NavLink></li>
                {/* dojscie do linków w metotodzieBrowse */}
              </ul>

            </nav>

          </header>
          <section>
            
              <Routes element={<ErrorPage/>}>
                <Route  path="contact"   element={<Contact />} />
                <Route path="news"  element={<News />} />
                <Route path="/ty"  element={<Home />} />

                <Route errorElement={<ErrorPage/>}/>
              </Routes>
              
            
            {/* Komponet Route wyświetla nam warunkowo inny kompoonent obecnie w wersji 6 musi być zamlknitey w Routes */}
          </section>

        </div>

      </Router>
    );
  }
}

export default App;
