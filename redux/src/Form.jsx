import React, { useState } from "react";
import { connect } from "react-redux";
import { addRate, editRate } from "./actions/appActions"



const Form = ({
    addRate,
    editRate,
    author = '',
    comment = '',
    id,
    callback,
    rate = 0,
}) => {

    const [autorInput, setAutorInput] = useState(author)
    const [rateInput, setRateInput] = useState(rate)
    const [commentInput, setComentInput] = useState(comment)


    const handleChangeAuthor = event => setAutorInput(event.target.value)
    const handleChangeRate = event => setRateInput(event.target.value)
    const handleChangeComment = event => setComentInput(event.target.value)

    const handleOnSubmit = event => {
        event.preventDefault()
        // if (!autorInput.length) {
        //     return;
        // }
        const rateObjet = {
            author: autorInput,
            comment: commentInput,
            rate: Number(rateInput),
            id,
        }

        console.log(rateObjet)
        id ? editRate(rateObjet) : addRate(rateObjet)

        if (id) {
            callback()
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>
                    Autor:
                    <input type="text" onChange={handleChangeAuthor} value={autorInput} />
                </label>
            </div>
            <div>
                <label>
                    Ocena:
                    <input type="number" onChange={handleChangeRate} value={rateInput} />
                </label>
            </div>
            <div>
                <label>
                    Komentarz:
                    <input type="text" onChange={handleChangeComment} value={commentInput} />
                </label>
            </div>
            <button type="submit">

                {id ? 'Edycja Oceny ' : 'Dodaj ocene'}

            </button>

        </form>
    )
}
// to jest hight order component ktory wrzucal te akcje do naszego componentu
const connectActionsToProps = ({
    addRate,
    editRate,
})


const FormConsumer = connect(null, connectActionsToProps)(Form)

export default FormConsumer


// use Disptach tylko wysłuchany bo jest to podmiana kodyu nie działającego już dla klass a wole sobie zostawić orginalny kod 


//use Selector tez wysłuchany