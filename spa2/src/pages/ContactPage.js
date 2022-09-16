import React from "react";
import "../styles/ContactPage.css"
// import {Prompt} from "react-router-dom"

class ContactPage extends React.Component {
state = {
    value: "",
}

hendleSubmit = (e)=>{
    e.preventDefault();
    this.setState({
        value: " "
    })
}


handleChange = (e) => {

 this.setState({
     value: e.target.value
 })
}
render(){
    return(
        <div className="contact">
            <form>
                <h3>Napisz do nas</h3>
                <textarea value={this.state.value} onChange={this.handleChange} placeholder="wpisz wiadomość"></textarea>
                <button onClick={this.hendleSubmit}>Wyślij</button>
            </form>
            {/* <Prompt
            when={true}
            message="masz niewypełniony formularz czy chcesz opóścić tę stronę ?"
            /> */}
        </div>
    )
}
}

export default ContactPage
