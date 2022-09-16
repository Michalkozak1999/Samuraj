import React from "react";
import { useParams } from "react-router";

const Product = () => {
    let {id} = useParams();
    return(
        <div>Produkt {id}</div>
    )
}

export default Product