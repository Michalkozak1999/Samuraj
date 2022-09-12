import React from "react";
import './App.css'
const Task = (props) => {

    const style = {
        color: "red"
    }
    const { text } = props.task
    const { date } = props.task
    const { id, active, important, finishDate } = props.task

    if (active) {
        return (
            <div id="wycentrowanie">

                <p>
                    <strong style={important ? style : null}>{text} </strong> - do  <span>{date}     </span>

                    <button onClick={() => props.changes(id)}>Zostało zrobione</button>
                    <button onClick={() => props.delete(id)}>X</button>

                </p>


            </div>
        )
    } else {
        const time = new Date(finishDate).toLocaleString()
        /// daje nam to date z godzina new date( ) konieczne 
        return (
            <div>
                <p>
                    <strong>{text} </strong> - do  <em> ( zrobić do {date} )    </em>
                    <br></br>
                    -potwierdzenie wykonania <span>{time}</span>

                    <button onClick={() => props.delete(id)}>X</button>

                </p>
            </div>
        )
    }
}

export default Task;