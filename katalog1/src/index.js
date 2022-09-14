import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


ReactDOM.render(<App />, document.getElementById('root'));


// console.log(active, done)
//     const activetasks = active.map(task => <Task key={task.id}
//         task={task} delete={props.delete} changes={props.changes}
//     />)
//     const donetasks = done.map(task => <Task key={task.id}
//         task={task} delete={props.delete} changes={props.changes}
//     />)
//     return (
//         <div>
//             <div className="active">

//                 <h1> Zadania do zrobienia</h1>
//                 {activetasks.length > 0 ? activetasks : <p>Brak Zadań</p>}
//             </div>
//             <hr></hr>

//             <div className="done">
//                 <h2>zadania zrobione <em>{done.length}</em></h2>
//                 {done.length > 2 && <span style={{ fontSize: "15px" }}>Wyświetlane są jedynie 2 ostatnie elementy</span>}
//                 {donetasks.slice(0, 2)}
//             </div>
