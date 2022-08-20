// const Cash = (props) => {
//   const value = (props.cash / props.ratio).toFixed(2)
//   return (
//     <div>{props.title} {props.cash <= 0 ? "" : value}</div>
//   )
// }

// class ExchangeCounter extends React.Component {

//   state = {
//     amount: "",
//   }

//   currencies = [
//     {
//       id: 1,
//       name: 'dollar',
//       ratio: 3.6,
//       title: 'Wartość w dolarach:'
//     },
//     {
//       id: 2,
//       name: 'euro',
//       ratio: 4.1,
//       title: 'Wartość w euro:'
//     },
//     {
//       id: 3,
//       name: 'pound',
//       ratio: 4.55,
//       title: 'Wartość w funtach:'
//     },
//   ]

//   handleChange = e => {
//     this.setState({
//       amount: e.target.value
//     })
//   }

//   render() {

//     const { amount } = this.state;

//     const calculators = this.currencies.map(currency => (
//       <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} />
//     ))

//     return (
//       <div className="app">
//         <label>
//           <input
//             type="number"
//             value={this.state.amount}
//             onChange={this.handleChange}
//           />
//         </label>
//         {calculators}
//       </div>
//     )

//   }
// }
// ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))





const Cash = (props) => {
  const value = (props.cash / props.ratio * props.price).toFixed(2)
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: "",
    product: "gas"
  }
static defaultProps ={
  currencies: [
    {
      id: 1,
      name: 'dollar',
      ratio: 3.6,
      title: 'Wartość w dolarach:'
    },
    {
      id: 2,
      name: 'euro',
      ratio: 4.1,
      title: 'Wartość w euro:'
    },
    {
      id: 3,
      name: 'pound',
      ratio: 4.55,
      title: 'Wartość w funtach:'
    },
    {
      id: 4,
      name: 'zloty',
      ratio: 1,
      title: 'Wartość w złotówkach:'
    },
  ],
  price: {
    electricity: .52,
    gas: 4.51,
    oranges: 3.79,
  }
}
 

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

handleSelect = (e) =>{
  this.setState({
    product: e.target.value,
    amount: ""
  })
}

inserttSuffix(select) {
  if(select === "electricity"){
    return (
      <em>Kwh</em>
    )

  } else if(select === "gas"){
    return (
      <em>litry</em>
    )

  }else if(select === "oranges"){
    return (
      <em>kilogramy</em>
    )

  } else return null
}

selectPrice =(select)=>{
  console.log(this.props.price[select])
 return  this.props.price[select]
}
  render() {

    const { amount, product } = this.state;
    const price =  this.selectPrice(product)

    const calculators = this.props.currencies.map(currency => (
      <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={price} />
    ))

    return (
      <div className="app">
        <label>Wybierz Produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">Prąd</option>
            <option value="gas">Benzyna</option>
            <option value="oranges">Pomarańcze</option>
          </select>
        </label>
        <br></br>
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>
        {this.inserttSuffix(this.state.product)}
        {calculators}
      </div>
    )

  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))

