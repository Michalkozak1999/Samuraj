import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    username: " ",
    email: " ",
    pass: "",
    accept: false
  }

  handleChange = (e) => {
    const name = e.target.name

    const type = e.target.type
    console.log(type)
    if(type === "text" || type ==="password" || type ==="email"){
      const value = e.target.value
     
      this.setState({
        [name]: value
      })
    } else if (type === "checkbox"){
      const checked = e.target.checked
      console.log(checked)
      this.setState({
        [name]: checked
      })
    }
    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("działa")
  }

  render() {
    return (

      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje Imię:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}></input>
          </label>

          <label htmlFor="email">Twoje adres E-mail::
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
          </label>

          <label htmlFor="password">Twoje Hasło:
            <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange}></input>
          </label>

          <label htmlFor="accept">
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}></input> Wyrażam zgodę
          </label>

          <button>Zapisz się</button>

        </form>



      </div>

    )
  }
}

export default App;
