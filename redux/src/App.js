import React from 'react';
import { Provider } from 'react-redux'

import Form from './Form';
import store from './store/store';
import './App.css';
import List from './List';
/// aby dodac naszego stora musimy dodoać providera który bedzie miał nasz store
function App() {
  return (
    // stan aplikacji przechowujemy w tym jednym storze
    <Provider store={store}>

      <Form />
      <div className="App">
        Programowanie z Fubu
        <List></List>
      </div>
    </Provider>
  );
}

export default App;
// pojedyńcze źródło prawdy redux
// stan jest tylko do odczytu
// by zmienić stan musimy wysłac akcje co chcemy zrobic jest niemutowalny stan
// zmian dokonujemy używając czystych funkcji