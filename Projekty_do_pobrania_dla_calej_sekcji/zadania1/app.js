


   
   
const Cash = (props) => {
    return(
        <div>
       {props.myratio}
        </div>
    )
}

class App extends React.Component{
    state = {
       number: 0,
        text: "",
        mytext: "kocham fubu",
        mojatablica: ["wróżba 1","wrózba 2","wróżba 3"]
      }

     
  
handleinput = (e) =>{
    this.setState({
     mytext: e.target.value,
    
})
}

handleclicksjow = () =>{
    

    const mynumber = Math.floor(Math.random()*this.state.mojatablica.length )
    // console.log(this.state.mojatablica.length)
        // console.log(mynumber)
        // console.log(this.state.mojatablica.length)
        const active = this.state.mojatablica.filter((users, index) => index === this.state.number  )
        this.setState({
            number: mynumber,
            text: active
        })
    
        
    // if(mynumber === 0){
    //     this.setState({
    //         text: "wróżba n1"
    //     })
    // }else if(mynumber === 1){
    //     this.setState({
    //         text: "wróżba n2"
    //     })
    // }  else if(mynumber === 2){
    //     this.setState({
    //         text: "wróżba n3"
    //     })
    // }else (
    //     this.setState({
    //         text: "dodana wróżba"
    //     })
    // )
    }
handleadd = () =>{
        // console.log(this.state.mojatablica)
        console.log(this.state.mytext)
        let {mojatablica} = this.state
        this.setState({
            mojatablica: this.state.mojatablica.concat(this.state.mytext)

            // mojatablica: this.state.mojatablica, "new value"
        })
        
        console.log(this.state.mojatablica )
        console.log(this.state.mojatablica.length)
        
}

// tak mniej wiecej to bedzie działać jak na n3 (lekka poprawa)

 




render(){
    const walka = this.state.mojatablica.map((wojna, index) =>(
        <Cash key={index} myratio={wojna} id={index}
         number={this.state.number} />
    ))

    
    return( 
        <div>
            <h1>Możliwe wróżby to</h1>
            {walka}
            <br></br>
           <label> wybierz swojego Pokemona:
              <input type="text" value={this.state.mytext} onChange={this.handleinput.bind(this)}/>
              <button onClick ={() =>this.handleadd()}>Co tam</button>
          </label>
           
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