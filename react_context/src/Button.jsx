import React, {PureComponent} from "react";
import { AppContext } from "./AppContext";

class Button extends PureComponent {

    static contextType = AppContext;
    // jest to drugi sposób zapisu
    render() {
        return(
            // <AppContext.Consumer>

            //     {
            //         ({toggleLoggedState})=>(
                        <button
                        onClick = {this.context.toggleLoggedState}
                        >Przełącz stan użytkownika</button>
            //         )
            //     }
            // </AppContext.Consumer>
         
        )
    }
}

export default Button