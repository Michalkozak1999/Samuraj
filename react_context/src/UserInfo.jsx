import React, { PureComponent } from "react";
import { AppContext } from "./AppContext";


class UserInfo extends PureComponent {
    render() {

        return (
            <AppContext.Consumer>
               
            {
                //można zamiast prosps napisać ({isUserLogged}) i zamaist użyć porps.isUserlog to byś napisał tylko to slowo
                (props) => {
                    console.log(props)
                    return(
                   
                    <div>
                         
                        <p>Użytkownik jest... {props.isUserLogged ? "zalogowany": "niezalogowany"}</p>
                    </div>
                    )
                }
            }


            </AppContext.Consumer>
            // app context consumer będzie pobierał od najblizszego providera
        )
    }
}

export default UserInfo;