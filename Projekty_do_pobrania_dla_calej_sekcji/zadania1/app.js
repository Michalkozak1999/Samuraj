


   
   
const Cash = (props) => {
if(props.id === props.number){
 <div>{props.myratio}</div>
}

    return(
        <div>{props.myratio}</div>
    )
}

class App extends React.Component{
    state = {
       number: 0,
        text: "",
        mytext: "kocham fubu",
        mojatablica: ["fubu","kocham","go"]
      }

     
      static defaultProps ={
        currencies: [
            { id: 0, name: "wróżba1"  },
            { id: 1, name: "wróżba 2"  },
            { id: 2, name: "wróżba 3"  },

        ]
    
    
    }
  
handleinput = (e) =>{
    this.setState({
     mytext: e.target.value,
    
})
}


handleadd = () =>{
        // console.log(this.state.mojatablica)
        this.setState({
            mojatablica: this.state.mojatablica.push(this.state.mytext),


            // mojatablica: this.state.mojatablica, "new value"
        })
        
        console.log(this.state.mojatablica)
        console.log(this.state.mojatablica.length)
        
}

// tak mniej wiecej to bedzie działać jak na n3 (lekka poprawa)

 handleclicksjow = () =>{
    

const mynumber = Math.floor(Math.random()*this.state.mojatablica.length )
// console.log(this.state.mojatablica.length)
    // console.log(mynumber)
    // console.log(this.state.mojatablica.length)
    this.setState({
        number: mynumber
    })

    
if(mynumber === 0){
    this.setState({
        text: "wróżba n1"
    })
}else if(mynumber === 1){
    this.setState({
        text: "wróżba n2"
    })
}  else if(mynumber === 2){
    this.setState({
        text: "wróżba n3"
    })
}else (
    this.setState({
        text: "dodana wróżba"
    })
)
}




render(){
    console.log(this.state.mojatablica.length)
    console.log(this.state.mojatablica)
    // console.log(this.props.dane.items)
    const walka = this.props.currencies.map(wojna =>(
        <Cash key={wojna.id} myratio={wojna.name} id={wojna.id} number={this.state.number} />
    ))
    return( 
        <div>
           <label> wybierz swojego Pokemona:
              <input type="text" value={this.state.mytext} onChange={this.handleinput.bind(this)}/>
              <button onClick ={() =>this.handleadd()}>Co tam</button>
          </label>
           {walka}
           <button onClick ={()=>this.handleclicksjow()}>TWOJA WRÓŻBA TO</button>
           <div>Wylosowany nr wróżby:  {this.state.number +1}</div>
          <h1> {this.state.text}</h1>
          
        </div>
    )
}
  

  

}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)

// const calculators = this.props.currencies.map(currency => (
//     <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={price} />
//   ))