// class App extends React.Component {
//   state = {
//     items: [
//       { id: 1, name: "herbata", active: true },
//       { id: 2, name: "ziemniaki", active: false },
//       { id: 3, name: "kasza", active: false },
//       { id: 4, name: "zupa wodna", active: true },
//       { id: 5, name: "wrzątek", active: false },
//       { id: 6, name: "chleb", active: false },
//     ],

//   }

//   handleChangeStatus = (id) => {
//     // console.log("działa");
//     console.log(id);
//     const items = this.state.items.map(item => {
//       if (id === item.id) {
//         item.active = !item.active
//       }
//       return item
//     })

//     this.setState({
//       items
//     })

//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header items={this.state.items} />
//         <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
//       </React.Fragment>
//     );
//   }
// }

class App extends React.Component {
  state = {
    items: [
            { id: 1, name: "herbata", active: true },
            { id: 2, name: "ziemniaki", active: false },
            { id: 3, name: "kasza", active: false },
            { id: 4, name: "zupa wodna", active: true },
            { id: 5, name: "wrzątek", active: false },
            { id: 6, name: "chleb", active: false },
    ]
  }

  handleonClick =(id) =>{
    console.log(id)
    // musimy zmieniać stan dla id 
    const newiteams = this.state.items.map(item =>{
      if(id === item.id){
        item.active = !item.active
      }
      return item

      // musi być słowo iteam by zwórocic przy takich nawiasach dana rzecz 
    })
    this.setState({
     iteams: newiteams
    })
   
    console.log("działa")
  }
render(){
  return(
    <div>
    <Header iteams = {this.state.items}/>
    <ListItems iteam2 = {this.state.items} changestatus = {this.handleonClick}/>
    
    </div>
  );
}
}

