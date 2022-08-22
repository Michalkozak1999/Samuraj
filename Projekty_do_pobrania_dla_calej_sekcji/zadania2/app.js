


   



   const Person= (props) =>{
      
       return(
           <div>{props.name}
            <button id = {props.id} onClick ={()=>props.handlclic(props.id)}>usuń</button>
           
             </div>
       )
   }

class List extends React.Component{
    state = {
        person: [
           "1", "2" ,"3"
        ]
      }

     
  
handleremove = (xd) =>{
   console.log(xd )
 const remove = this.state.person.slice()
 const naprawde = remove.filter(ech => this.state.person.id !== xd )
 console.log(this.state.person.index)
 

 this.setState({
     person: naprawde
 })
}


render(){
   
    const showperson = this.state.person.map((user, index) => (<Person key={user} name={user} handlclic ={this.handleremove} id = {index}/  > ) )
    return( 
      <div>
      {showperson}


      </div>
    )
}
}
  



ReactDOM.render(
    <List />,
    document.querySelector("#root")
)

