import React, { useState } from "react";
import Form from "./Form";


const Elemnet = ({ author, comment, rate, id }) => {
    const [visibleForm, setVisibleForm] = useState(false)

    const toggleElement = () => setVisibleForm(prev => !prev)


    // by być w stanie zamknac formularz musimy np przesłac callback
    const formOrButtonElement = visibleForm ? (
        <Form
            callback={toggleElement}
            author={author}
            comment={comment}
            rate={rate}
            id={id}
        ></Form>
    ) : (
        <button onClick={toggleElement}>Edytuj Książke</button>
    )


    return (
        <div>
            <li>
                <p>Autor Oceny: {author}</p>
                <p>Ocena: {rate}</p>
                <p>Komentarz: {comment}</p>
                {formOrButtonElement}
            </li>
        </div>
    )
}

export default Elemnet