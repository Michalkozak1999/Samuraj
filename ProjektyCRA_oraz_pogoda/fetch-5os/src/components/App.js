import React, { Component } from 'react';
import UserList from './UserList';
import ButtonFetchUsers from './ButtonFetchUsers';
import './App.css';



const API = 'https://randomuser.me/api/?results=1';

class App extends Component {
  state = {
    users: []
  }



  handleDataFetch = () => {
 
    fetch(API)
    .then(response => {
     if(response.ok){
      //  console.log(response)
      return  response;
     } throw Error(response.status)
    })
    .then(response =>response.json())
    .then(data  => {  
      const user = data.results;




      this.setState(prevState => ({
        
        users: prevState.users.concat(user)
        
      }))
    })
    .catch(error => console.log(`${error} trzymaj sie wariacie`));
  }


  render() {
    const users = this.state.users
    // const map = users.map(mymap =>  mymap)
    return (
      <div>

        {/* {map} */}
        <ButtonFetchUsers click2={this.handleDataFetch} />
        {users.length > 0  ? <UserList users={users} /> : "Nic tu nie ma "}


      </div>
    );
  }
}

export default App;
