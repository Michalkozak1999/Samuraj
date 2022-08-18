// class Counter extends React.Component {

//   state = {
//     count: 0,
//     result: this.props.result
//   }

//   handleMathClick(type, number = 1) {
//     // debugger
//     if (type === "subtraction") {
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//         result: prevState.result - number
//       }))
//     } else if (type === "reset") {
//       this.setState(prevState => (
//         {
//           count: prevState.count + 1,
//           result: this.props.result
//         }
//       ))
//     } else if (type === "addition") {
//       this.setState(prevState => (
//         {
//           count: prevState.count + 1,
//           result: prevState.result + number
//         }
//       ))
//     }

//   }
//   render() {
//     return (
//       <>
//         <button onClick={this.handleMathClick.bind(this, "subtraction", 10)}>-10</button>
//         <button onClick={() => this.handleMathClick(1, "subtraction")}>-1</button>
//         <button onClick={this.handleMathClick.bind(this, "reset")}>Reset</button>
//         <button onClick={this.handleMathClick.bind(this, "addition", 1)}>+1</button>
//         <button onClick={this.handleMathClick.bind(this, "addition", 10)}>+10</button>
//         <h1>Liczba kliknięć: {this.state.count}</h1>
//         <h1>Wynik: {this.state.result}</h1>
//       </>
//     )
//   }

// }

// const startValue = 0;
// ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'))


class Counter extends React.Component {
state ={
  count: 0,
  result: 0
}


handleMathClick(type, number) {
  // debugger
  if(type === "substraction"){
    this.setState(prevstate =>({
      count: prevstate.count + 1,
      result: prevstate.result - number
    }))
  } else if(type === "reset"){
    this.setState(prevstate =>({
      count: prevstate.count +1,
      result: 0
    }))
  }


}


render(){
  return(
    <>

    <MathButton
     name="-10"
      number="10"
       type = "substraction"
        click={this.handleMathClick.bind(this)}
        />

<MathButton
     name="-1"
      number="1"
       type = "substraction"
        click={this.handleMathClick.bind(this)}
        />

<MathButton
     name="Reset"
      number="0"
       type = "reset"
        click={this.handleMathClick.bind(this)}
        />

<MathButton
     name="+1"
      number="-1"
       type = "substraction"
        click={this.handleMathClick.bind(this)}
        />

<MathButton
     name="+10"
      number="-10"
       type = "substraction"
        click={this.handleMathClick.bind(this)}

        />


<ResoultPnael click = {this.state.count} wynik = {this.state.result}/>




    {/* <MathButton/>
    <MathButton/>
    <MathButton/>
    <MathButton/> */}


  
    {/* <button onClick = {this.handleMathClick.bind(this, "substraction", 10)}>-10</button>

    <button onClick = {() => this.handleMathClick("substraction", 1)}>-1</button>

    <button onClick = {this.handleMathClick.bind(this, "reset", 0)}>Reset</button>

    <button onClick = {this.handleMathClick.bind(this, "substraction", -1)}>+1</button>

    <button onClick = {this.handleMathClick.bind(this, "substraction", -10)}>+10</button> */}

    
    </>
  )
}
}


// class MathButton extends React.Component{
//   render(){
//     return(
//       <>
      
      
      
//       </>
//     )
//   }
// }

const MathButton  = (props) =>{
  console.log(props)
  return(
  <button onClick = {() => props.click(props.type, props.number)}> {props.name} </button>
  )
}

const ResoultPnael = (props) => {

  return(
    <>
<h1>Liczba kliknięć: {props.click} {props.click>=10 ?<div>Przeciążenie procesora</div> : null}</h1>

<h1>Wynik: {props.wynik}</h1>
</>
  )
}


ReactDOM.render(<Counter />, document.getElementById('root'))