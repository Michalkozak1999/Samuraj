// class App extends React.Component {
//   state = {
//     availableProducts: 7,
//     shoppingCart: 1,
//   }

//   handleRemoveFromCart = () => {
//     this.setState({
//       shoppingCart: this.state.shoppingCart - 1,
//     })
//   }

//   handleAddToCart = () => {
//     this.setState({
//       shoppingCart: this.state.shoppingCart + 1,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
//         <span> {this.state.shoppingCart} </span>
//         <button disabled={this.state.shoppingCart === this.state.availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
//       </div>
//     )
//   }
// }


class App extends React.Component {
state = {
  availableProducts: 7,
  shopingCart: 3,
}

handleremovecart =(number) => {
  this.setState({
    shopingCart: this.state.shopingCart - number
  })
}
handleBuy = () => {
   this.setState({
     availableProducts: this.state.availableProducts - this.state.shopingCart,
     shopingCart: 0
   })
}
// handleaddCart =() => {
//   this.setState({
//     shopingCart: this.state.shopingCart +1
//   })
// }
render(){
  const {shopingCart, availableProducts} = this.state
  const style = this.state.shopingCart === 0 ? {opacity: 0.3} : {}

  // można zamiast takiego dlugiego opisu w style przy span stworzyc zmienna i przypisac do style podobno bardziej czytelniejsze
  return(
    <>
    <button onClick ={this.handleremovecart.bind(this, 1)  } disabled = {this.state.shopingCart === 0 ? true : false}>-</button>
    <span style={this.state.shopingCart === 0 ? {
      opacity: 0.3
    } : {}}>{this.state.shopingCart}</span>
    <button disabled={this.state.shopingCart>=this.state.availableProducts ? true : false}onClick = {this.handleremovecart.bind(this, -1)}>+</button>
    {this.state.shopingCart>0 && <button onClick ={this.handleBuy}>KuB</button>}
    </>

  )
}


}

ReactDOM.render(<App />, document.getElementById('root'))