import React from "react";
import Elemnet from "./Element.jsx";

import { connect } from "react-redux";
import store from "./store/store";

const List = ({ ratesInProps }) => {


    const ratesElements = ratesInProps.map(rate => <Elemnet key={rate.id} {...rate}/>)
    return (
        <div>
            <ul>
                {ratesElements}
            </ul>
        </div>
    )
}


// ze stora wyciagasz
const connectReduxStateToProps = store =>({
    ratesInProps: store.rates
})

const ListConsumer = connect(connectReduxStateToProps)(List)



export default ListConsumer