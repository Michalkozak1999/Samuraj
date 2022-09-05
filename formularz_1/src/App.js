import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state={
    username: " "
  }

  handleChange =(e) =>{
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (

      <div>
        <form>
          <label htmlFor="user">Twoje imię:
            <input type=" text" id="user" name="username" value={this.state.username} onChange={this.handleChange}></input>

          </label>
        </form>



      </div>

    )
  }
}

export default App;
