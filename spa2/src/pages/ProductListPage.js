import React from"react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css"


const products = ["car", "bike", "motocycle"]



const ProductListPage = () =>{
    const list = products.map(item =>{
        return(
            <li key={item}>
<Link to={`/products/${item}`}>{item}</Link>

            </li>
        )
    })
    return(
        
        <div className="products">
        <div>
       <h2>Lista produktówv </h2> 
            <ul>{list}</ul>
           
        </div>
        </div>
    )
}

export default ProductListPage