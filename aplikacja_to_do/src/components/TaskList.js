import './App.css'
import React from 'react'
import Task from './Task';
const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);


    // done.sort((a,b) =>  b.finishDate - a.finishDate)

    //analogicznie 
    if (done.length >= 2) {
        done.sort((a, b) => {
            if (a.finishDate < b.finishDate) {
                return 1
            }
            if (a.finishDate > b.finishDate) {
                return -1
            }
            return 0
        })
    }

    if (active.length >= 2) {

        active.sort((a, b) => {

            a = a.text.toLowerCase()
            b = b.text.toLowerCase()


            if (a.text < b.text) {
                return -1;
            }
            if (a.text > b.text) {
                return 1;
            }
            return 0
        })
    }


    console.log(active, done)
    const activetasks = active.map(task => <Task key={task.id}
        task={task} delete={props.delete} changes={props.changes}
    />)
    const donetasks = done.map(task => <Task key={task.id}
        task={task} delete={props.delete} changes={props.changes}
    />)
    return (
        <div>
            <div className="active">

                <h1> Zadania do zrobienia</h1>
                {activetasks.length > 0 ? activetasks : <p>Brak Zadań</p>}
            </div>
            <hr></hr>

            <div className="done">
                <h2>zadania zrobione <em>{done.length}</em></h2>
                {done.length > 2 && <span style={{ fontSize: "15px" }}>Wyświetlane są jedynie 2 ostatnie elementy</span>}
                {donetasks.slice(0, 2)}
            </div>




        </div>
    )
}

export default TaskList;