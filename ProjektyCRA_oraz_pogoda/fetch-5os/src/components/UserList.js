import React from 'react';
import './Userlist.css'






const UserList = (props) => {
  console.log(props.users)
  const people = props.users.map(mymap => (
    <div key={mymap.login.uuid}>
      <img src={mymap.picture.large} alt={mymap.name.last}></img>
      <h4>  {`${mymap.name.title} 
      ${mymap.name.last}`}  </h4>
      <p> {mymap.email}</p>
    </div>
  )
  )
  return (
    <div className="users">
      {people}
    </div>


  );
}

export default UserList;
