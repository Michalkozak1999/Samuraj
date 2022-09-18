import React, {PureComponent} from 'react';
import { createContext } from "react";
import './App.css';
import { AppContext, defaultObject } from './AppContext';
import UserInfo from './UserInfo';
import Button from './Button';


class App extends PureComponent {
 state = {
   isUserLogged: defaultObject.isUserLogged
 }
//appContext provider go dostarcza 

  render(){
  return (
    <div>
      

     <AppContext.Provider value={{
      isUserLogged: this.state.isUserLogged,
      toggleLoggedState: this.handleToggleStateILoged
    }}>
      <UserInfo/>
      <Button/>
    </AppContext.Provider>
   
    </div>
  );
}


handleToggleStateILoged = () => this.setState(prevState => ({
      isUserLogged: !prevState.isUserLogged,
    }));





// handleToggleStateILoged = () =>{
//   this.setState({
//     isUserLogged: !this.state.isUserLogged
//   })
// }


}

export default App;


// import { PureComponent } from 'react';

// import Button from './Button';
// import UserInfo from './UserInfo';

// import { AppContext, defaultObject } from './AppContext';

// class App extends PureComponent {
//   state = {
//     isUserLogged: defaultObject.isUserLogged,
//     isUserAdult: true,
//   }

//   render() {
//     return (
//       <div>
//         <UserInfo />
//         <Button />
//         <AppContext.Provider value={{
//           isUserLogged: this.state.isUserAdult,
//           toggleLoggedState: this.handleToggleStateIsAdult,
//         }}>
//           <UserInfo />
//           <Button />
//         </AppContext.Provider>
//       </div>
//     );
//   }

//   handleToggleStateIsLogged = () => this.setState(prevState => ({
//     isUserLogged: !prevState.isUserLogged,
//   }));

//   handleToggleStateIsAdult = () => this.setState(prevState => ({
//     isUserAdult: !prevState.isUserAdult,
//   }));
// }

// export default App;