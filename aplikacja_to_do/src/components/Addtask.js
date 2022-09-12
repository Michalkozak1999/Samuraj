
import React, { Component } from "react";
import './AddTask.css'
class AddTask extends React.Component {
    state ={
        text: "",
        chacked: false,
        date: "2019-01-23",
    }
    handlechange = (e) =>{
       const text1 = e.target.value
        this.setState({
            text: text1
        })
    }
    render() {

        return (

            <div className="form">
                <input type ="text" placeholder="dodaj zadanie" value={this.state.text}
                onChange={this.handlechange}></input>
                <input type = "checkbox" checked={this.state.chacked} id= "important"></input>
                <label htmlFor="important">Priorytet</label><br></br>
                <label htmlFor="date">DO kiedy zrobić</label>
                <input type="date" value={this.state.date} min="2019-01-01" max="2025-12-31"></input>
                <button>Dodaj</button>
              
            </div>
        )
    }
}

export default AddTask;