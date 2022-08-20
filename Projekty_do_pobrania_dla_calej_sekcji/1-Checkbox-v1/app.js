// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>;

// class CheckboxAgeConfirmation extends React.Component {

//   state = {
//     isConfirmed: false,
//   }

//   handleCheckboxChange = () => {
//     this.setState({
//       isConfirmed: !this.state.isConfirmed
//     })
//   }

//   displayMessage = () => {
//     if (this.state.isConfirmed) {
//       return <PositiveMessage />
//     } else {
//       return <NegativeMessage />
//     }
//   }
//   render() {
//     console.log(this.state.isConfirmed);
//     return (
//       <>
//         <h1>Kup bilet na horror roku!</h1>
//         <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
//         <label htmlFor="age">Mam co najmniej 16 lata</label>
//         {this.displayMessage()}
//       </>
//     )
//   }
// }

// ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById('root'))


// const PositiveMessage = () =><p>Możesz obejrzeć film zapraszamy</p>
// const NegativeMesage = () => <p> Nie możesz obejrzeć tego fiilmu bo jesteś fubu</p>


const ValidatiionMessage = (props) => {
return(<p>{props.txt}</p>)}


const OrderForm = (props) => {
  return(
    <form onSubmit = {props.submit}> 

          <input 
          type = "checkbox" 
          id = "age"  
          onChange={props.change} 
          checked = {props.checked1}>
          </input>

          <label 
          htmlFor = "age">
            Mam conajmniejn 16 lat
            </label>
            <div></div>
            <button type = "submit"> Kup Bilet </button>
      </form>
  )
}

class TicketShop extends React.Component{

  state = {
 isConfirmed: false,
 isFormSubmitetted: false

  }


handleCheckboxChange = () => {
  this.setState({
    isConfirmed: !this.state.isConfirmed,
    isFormSubmitetted: false
  })
}

displayMessage = () => {
  if(this.state.isFormSubmitetted){
  if(this.state.isConfirmed){
    return <ValidatiionMessage txt = "Możesz obejrzeć film zapraszamy"/>
  } else {
    return <ValidatiionMessage txt ="nie jest ok"/>
  }
} else {
  return null
}
}

handleFormSubmit = (e) => {
  e.preventDefault()
  if(!this.state.isFormSubmitetted){
  this.setState({
    isFormSubmitetted: true
  })
}
}

  render(){
    const {isConfirmed, isFormSubmitetted} = this.state
    console.log(isConfirmed)
    console.log(this.state.isConfirmed)
    return(
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
        change = {this.handleCheckboxChange}
        submit = {this.handleFormSubmit}
        checked1 = {this.state.isConfirmed}
        />

        {/* nie piszemy onClick z tego powodfu ze jest w formularzu w button onsubmiit jest potwierdzeniem naszego formularza  */}
        {/* <form onSubmit = {this.handleFormSubmit}> 

          <input 
          type = "checkbox" 
          id = "age"  
          onChange={this.handleCheckboxChange} 
          checked = {isConfirmed}>
          </input>

          <label 
          htmlFor = "age">
            Mam conajmniejn 16 lat
            </label>


          <div></div><button type = "submit"> Kup Bilet </button>
        </form> */}
       {/* {displayMessage(isConfirmed, isFormSubmitetted)} */}
       {this.displayMessage()}
      </>

    )
  }
}



// const displayMessage = (isConfirmed, isFormSubmitetted) => {
//   if(isFormSubmitetted){
//   if(isConfirmed){
//     return <ValidatiionMessage txt = "Możesz obejrzeć film zapraszamy"/>
//   } else {
//     return <ValidatiionMessage txt ="nie jest ok"/>
//   }
// } else {
//   return null
// }
//}



ReactDOM.render(<TicketShop/>, document.querySelector("#root"))