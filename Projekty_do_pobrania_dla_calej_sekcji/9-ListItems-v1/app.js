
const Iteam = (props) => {
  return(
    <li>owoc {props.content}</li>
  )
}



class ListItems extends React.Component {
  state = {
    items: ["jabłko", "sliwka", "gruszka"]
  }
  render() {
   // debugger
    return (
      <ul>
        {/* {this.state.items.map((witam, id) =><li key ={id}>{`owoc ${witam}`}</li>)} */}
        {this.state.items.map((witam, id) =><Iteam key = {witam} content = {witam}/>)}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems />, document.getElementById('root'))
