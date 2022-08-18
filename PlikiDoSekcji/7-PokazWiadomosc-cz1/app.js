// class Message extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messageIsActive: false
//     };
//     this.handleMessageButton = this.handleMessageButton.bind(this);
//   }

// const { Logger } = require("sass");

//   handleMessageButton() {
//     this.setState({
//       messageIsActive: !this.state.messageIsActive
//     });
//   }

//   render() {
//     console.log(this.state.messageIsActive);
//     const text =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus voluptas temporibus accusantium molestiae distinctio eum ipsum fugiat, hic repudiandae ipsa cum ipsam enim optio? Ut repellat ipsum optio exercitationem?";

//     return (
//       <React.Fragment>
//         <button onClick={this.handleMessageButton}>     {this.state.messageIsActive ? 'Ukryj' : "Pokaż"}
//         </button>
//         {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
//         {this.state.messageIsActive && <p>{text}</p>}

//       </React.Fragment>
//     );
//   }
// }

// ReactDOM.render(<Message />, document.getElementById("root"));
// // <p>{this.state.messageIsActive && text}</p>


class Message extends React.Component {
constructor(props){
  super(props)
  this.state = {
    messageIsActive: false
  }
}
handlecMessage(){
  this.setState({
    messageIsActive: !this.state.messageIsActive
  })

  
}


  render(){
    console.log(this.state.messageIsActive)
      const text = "lorem impus czemu sie nie piszszesz bez cudzyslowia ani z "



      return(
        <>
          <button onClick = {this.handlecMessage.bind(this)}>{this.state.messageIsActive  ? "ukryj": "pokaż" }</button>
         {/* {this.state.messageIsActive ?  <p>{text}</p> : null} */}
          {this.state.messageIsActive && <p>{text}</p>}


        </>

      )
}


}


ReactDOM.render(<Message />, document.getElementById("root"));
// // <p>{this.state.messageIsActive && text}    jesli bedzie flase to nic jak true to text </p>


{/* <p>{this.state.messageIsActive && text}</p>    */}