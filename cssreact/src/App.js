import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    button: false
  }

  colortrue = {
    color: "blue",
    backgroundColor: "red"
  }
componentDidMount(){
  
}
// handleclick = () => {
//   this.setState({
//     button: !this.state.buttonbutton
//   })
// }
 handleClick = () => {
   this.setState({
     button: !this.state.button
   })
 }

  render() {
    // const btn_off = {
    //   border: "3px solid black",
    //   color: "blue",
    //   padding: "10px 20px",
    //   fontSize: 30,
    //   display: 'block',
    //   margin: '20px auto',
    //   backgroundColor: "green"
    // }
    // const btn_on = {
    //   border: "3px solid black",
    //   color: "blue",
    //   padding: "10px 20px",
    //   fontSize: 30,
    //   display: 'block',
    //   margin: '20px auto',
    //   backgroundColor: "red"
    // }


    const styles = {
       btn_off: {
        border: "3px solid black",
        color: "blue",
        padding: "10px 20px",
        fontSize: 30,
        display: 'block',
        margin: '20px auto',
        backgroundColor: "green"
      },
       btn_on: {
        border: "3px solid black",
        color: "blue",
        padding: "10px 20px",
        fontSize: 30,
        display: 'block',
        margin: '20px auto',
        backgroundColor: "red"
      }
    }
    return (
      <div>
        <button  style={this.state.button ? styles.btn_off: styles.btn_on }  onClick={this.handleClick}>{this.state.button ? "wyłącz": "włącz"} </button>
      </div>
    );
  }
}

export default App;
