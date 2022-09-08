import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    username: " ",
    email: " ",
    pass: "",
    accept: false,
    tak: "",


    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    }
  }


  messages = {
    username_incorect: "Nazwa musi być dluższa niż 10 znaków i nie mnoże zawierać spacji",
    email_inncorect: " brak @ w emailu",
    password_incoorect: "hasło musi mieć 8 znaków",
    accept_incorect: "nie potwierdzona zgoda"
  }

  handleChange = (e) => {
    const name = e.target.name

    const type = e.target.type
    console.log(type)
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value

      this.setState({
        [name]: value
      })
    } else if (type === "checkbox") {
      const checked = e.target.checked
      console.log(checked)
      this.setState({
        [name]: checked
      })
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()

    const validation = this.formValidation()
    console.log(validation)
    if (validation.correct) {
      this.setState({
        username: " ",
        email: " ",
        pass: "",
        accept: false,
        tak: "formularz został wysałany",

        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false,
        }
      })
      console.log("formularz wyslany")
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.password,
          accept: !validation.accept,
        }
      })
      console.log("kocham fubu")
    }
  }

  formValidation = () => {
  
    // true - ok
    // false - źle
    let username = false;
    let email = false
    let password = false
    let accept = false
    let correct = false

    if (this.state.username.length > 10 && this.state.username.indexOf(" ") === -1) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.pass.length === 8) {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && password && accept) {
      correct = true
    }
    return ({
      correct,
      username,
      email,
      password,
      accept
    })
  }

componentDidUpdate(){
if(this.state.tak !== ""){
  setTimeout(()=> this.setState({
    tak: ""
  }) ,3000)
}
}


  render() {
    return (

      <div>

        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje Imię:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange}></input>
            {this.state.errors.username && <span>{this.messages.username_incorect}</span>}
          </label>


          <label htmlFor="email">Twoje adres E-mail:
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
            {this.state.errors.email && <span>{this.messages.email_inncorect}</span>}
          </label>

          <label htmlFor="password">Twoje Hasło:
            <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange}></input>
            {this.state.errors.pass && <span>{this.messages.password_incoorect}</span>}
          </label>

          <label htmlFor="accept">
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}></input> Wyrażam zgodę <br></br>
            {this.state.errors.accept && <span>{this.messages.accept_incorect}</span>}
          </label>

          <button>Zapisz się</button>

        </form>
        {this.state.tak && <h3> {this.state.tak}</h3>}



      </div>

    )
  }
}

export default App;
