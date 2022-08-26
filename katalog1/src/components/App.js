
import React, {Component} from "react";
import './App.css';
import SwitchButton from "./SwitchButton";

class App extends Component {
  state ={
    time: 0,
    active: false,
  }

  
addSecends = () => {
  this.setState({
    time: this.state.time +1
  })
}


handleclick = ()=> {
if(this.state.active){
  clearInterval(this.idInterval)
}else{
  this.idInterval  = setInterval(()=>this.addSecends(),1000)
}

  this.setState({
    active: !this.state.active
  })
}

  render(){
  return(
    <div>
      <h1>{this.state.time}</h1>
        <SwitchButton click={this.handleclick} showclick ={this.state.active}/>

    </div>
  )
  }
}
export default App;