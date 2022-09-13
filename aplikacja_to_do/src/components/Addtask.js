
import React, { Component } from "react";
import './AddTask.css'
class AddTask extends React.Component {
    minDate = new Date().toISOString().slice(0, 10)
    state = {
        text: "",
        checked: false,
        date: this.minDate
        //tak metodycznie z metody toISoString wyciany pierwsze 10 znaków zaczynajac od 1 (nasze 0)  i kończac na 10

    }



    handleChexBox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }


    handlechange = (e) => {
        const text1 = e.target.value
        this.setState({
            text: text1
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    handleClick = () => {
        console.log("dodaj")

        const { text, checked, date } = this.state
        if (text.length > 2) {
            const add = this.props.addtask(text, date, checked)
            if (add) {
                this.setState({
                    text: "",
                    checked: false,
                    date: this.minDate,
                })
            }
        } else {
            alert("za krótka nazwaa")
        }
    }


    render() {
        const maxdate = this.minDate.slice(0, 4) * 1 + 1
        const feniks = maxdate + "-12-31"
        //  maxdate = maxdate + "-12-31" //wiec 2023-12-31
        //jak je wytniemy to są stringiem (wiec pewnie trzeba zamienić na number) jak coś mnożymy przez jeden to element staje się number
        return (

            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text}
                    onChange={this.handlechange}></input>

                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleChexBox}></input>
                <label htmlFor="important">Priorytet</label><br></br>
                <label htmlFor="date">DO kiedy zrobić</label>

                <input type="date" value={this.state.date} min={this.minDate}
                    max={feniks} onChange={this.handleDate}></input>
                <button onClick={this.handleClick}>Dodaj</button>

            </div>
        )
    }
}

export default AddTask;