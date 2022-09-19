import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import Curseinfo from './CourseInfo';
import AddCourse from './form'

const samurajPorgaramowaniaCourses = [
  {
    id: 1,
    title: "kocham fubu1"
  },
  {
    id: 2,
    title: "kocham fubu2"
  },
  {
    id: 3,
    title: "kocham fubu3"
  },
  {
    id: 4,
    title: "kocham fubu4"
  },
  {
    id: 5,
    title: "kocham fubu5"
  },

]
const coursesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.course];
    case 'REMOVE':
      return state.filter(course => course.id !== action.id) ;
    case "FETCH":
      return action.data;
    default:
      throw new Error("opps smoething went wrong")

  }
}


//funkcja do pobbierania asynchronicznych danych ale symulacja do zadania 
const fetchAsyncData = async () =>{
  await new Promise(resolve=> setTimeout(resolve, 3000))
}




// obiekt akcji mósi obowiązkowo zawierać type: npm "ADD"
const App = () => {
 const [state, dispatch] = useReducer(coursesReducer, []);
 // dispatch to metoda która zawiera obiekt akcji którą musimy przekazać // dispatch dostarcza akcje do returna z tego co rozumiem 
  // reducer to spycjalna funkcja przyjmuje dwa argumenty (state) i akcje 

const asyncFetch = async () => {
 await fetchAsyncData();
 dispatch({type: "FETCH", data: samurajPorgaramowaniaCourses  });
}

  // funckja ładująca dane do use effekta




// załadowanie danych do aplikacji przez use Effekta
useEffect(() =>{
 asyncFetch();
}, [])


 const courseselemnts =state.map(course => (
   <Curseinfo 
   key={course.id}
  onClickHendler = {dispatch}
   {...course}
   />
 ))
  return (
    <div className="App">
      {courseselemnts}
      <AddCourse  addHendler={dispatch}/>
    </div>
  );
}

export default App;
