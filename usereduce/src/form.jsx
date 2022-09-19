import React, { useState } from "react";

const AddCourse = ({ addHendler, id }) => {

    const [inputData, setInputData] = useState("")


    const handleonChannge = event => setInputData(event.target.value)

    const handlerCilckAdd = () => {
        const newCourse = {
            title: inputData,
            id: Math.floor(Math.random() * 1000),
        }
        addHendler({
            type: "ADD",
            id,
            course: newCourse,
        })
        setInputData("")
    }
    return (
        <div>
            <input type="text" onChange={handleonChannge} value={inputData }/>
            <button onClick={handlerCilckAdd}>Dodaj kurs</button>
        </div>

    )
}

export default AddCourse