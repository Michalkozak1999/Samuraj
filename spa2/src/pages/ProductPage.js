

import React from "react";
import Product from "../components/Product"
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import ProductListPage from "./ProductListPage";

const ProductPage = () => {
    let {id} = useParams();
    const navigate = useNavigate()
    return(
        <>
        <div>Strona sproduktu {id}
            {/* <h1> Wynik {invoiceId}</h1> */}
        </div>
        {/* <Product/>
            <Link to="/products" > Powrót do strony</Link> */}
            {/* <Routes>
                <Route path="" element={<Product/>}></Route>
            </Routes> */}
        {/* <Product/> */}
        <Product />
            {/* <Routes>
                <Route path="products" element={<ProductListPage/>}>Lista 2</Route>
            </Routes> */}

        <button  onClick={()=> navigate(-1)}>Go Back</button>
        {/* <Link to="products">Powrót do Listy produktów</Link> */}
        {/* <Link to="/product">Powrót do strony produktów</Link> */}
        </>
    )
}

export default ProductPage