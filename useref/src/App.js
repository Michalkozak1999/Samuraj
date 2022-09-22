import React, { createRef, useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {

const [counter, setcounter] = useState(0)
  const inputref = useRef(true)
  // use ref ma odrazu przyjeta wartośc od poczataku a do create ref jest na początku null use ref przy przyrenderowaniu komponentu zawsze zwóruci zawsze to samo a createref ma swoja wartośc do czasu przerenderowania
  const numberInputref = createRef(true)
// czyli use ref po pierwszym przerenderowaniu z true zmienia sie na referencje i ona juz zawsze będzie się odnosił do tego elementu a create ref dalej daje null 

// use effekt bedzie sie ywkonywal po zamontowaniu componentu
useEffect(
  ()=>{
   inputref.current.focus()
  }, []
)
// jęsli na starcie byśmy chcieli miec na danym elemencie odrazu po odpaleniu strony



  const focusonInput = () => inputref.current.focus()
const increasecounter = () => setcounter(counter +1)
  return (
    <div className="App">

      <label>
        <input ref={numberInputref} type="number"/>
      </label>

      <label>
        <input ref={inputref}
          type="text"/> 
      </label>


      <button onClick={focusonInput}>Ustaw fokus na input</button>
    <button onClick={increasecounter}>Przerenderuj komponent</button>

    </div>
  );
}

export default App;
