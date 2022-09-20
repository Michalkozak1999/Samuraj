
import React, { useState } from 'react';
import { useMemo } from 'react';
import './App.css';
import Counter from './counter';


const App =()=> {
// use memo chodzi o nie przerenderowywanie komponentu całego kiedy masz np skomplikowane obliczenia

const [firstCounter, setFirstCounter] = useState(0)
const [secendCounter, setsecendCounter] = useState(0)


const increaseFirstCounter = () => setFirstCounter(firstCounter +1)

const increasesecendtCounter = () => setsecendCounter(secendCounter +1)



// react memo średnio sobie radzie przy obiekatach referencyjnych

// przy takim użyciu use Memo musimy wpisac first counter do naszej tablicxy zalezności by się przerenderowal 
// react memo w counter weszytsko działa poprawie w pierwszym przykładzie 
const firstCounterComponent = useMemo(()=>
<Counter counter={firstCounter} index ={1}/>, [firstCounter])
// całe return wyowłuje sie za każdym razem 
  return (
    <div className="App">
    
     <p>Licznik nr 1, Wynosi: {firstCounter}</p>
     <button onClick={increaseFirstCounter}>Zwiększ licznik nr 1</button>
     {firstCounterComponent}


     <Counter counter={secendCounter} index={2}/>
     <p>Licznik nr 2, Wynosi: {secendCounter}</p>
     
     <button onClick={increasesecendtCounter}>Zwiększ licznik nr 2</button>

     
    </div>
  );
}

export default App;



/////////////
/// use CallBack
// jest dla funcki zamiast memo