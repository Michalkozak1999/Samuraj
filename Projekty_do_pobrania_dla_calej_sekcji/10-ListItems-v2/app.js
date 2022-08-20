

const srata ={
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female"
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female"
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      sex: "male"
    },
    {
      id: 5,
      age: 26,
      name: "Meziziusz",
      sex: "male"
    }
  ]

}


const Item = (props) => (
<div className="userInfo">
  <h1> {props.content.name}</h1>
  <p>Informacje o użytkowniku</p>
  <p>Wiek używtkownika: <strong> {props.content.age}</strong></p>
  <p>Jest: {props.content.sex}</p>
</div>
)


class ListItems extends React.Component {
  state = {
   select: "all",
  }

userList = () => {
  let users1 = this.props.dane.users

switch(this.state.select){
  case "all":
    return users1.map((oneman)=> <Item content={oneman} key ={oneman.id} />)
  case "female":
    users1 = users1.filter(show => show.sex==="female")
    return users1.map((oneman)=> <Item content={oneman} key ={oneman.id} />)
  case "male":
    users1 = users1.filter(show => show.sex==="male")
    return users1.map((oneman)=> <Item content={oneman} key ={oneman.id} />)

    default:
      return "brak danych"
}


  
}

handleuserFilter = (option) => {
  this.setState({
    select: option
  })

}
  render() {
    return (
      <div>
        <button onClick={this.handleuserFilter.bind(this,"all")}>Wszyscy</button>
        <button onClick={this.handleuserFilter.bind(this,"female")}>Kobiiety</button>
        <button onClick={this.handleuserFilter.bind(this,"male")}>Mężczyźni</button>
      {this.userList()}
      </div>
    )
  }
}

ReactDOM.render(<ListItems dane = {srata}/>, document.getElementById('root'))
