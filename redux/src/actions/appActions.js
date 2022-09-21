

export const ADD = 'ADD';
// stałe informują jakiego typu akcje mamyb w pliku
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

 export const addRate = ({author, comment, rate}) => ({
    type: ADD,
    payload: {
        author,
        rate,
        comment,
        id: Math.floor(Math.random()*1234),
    }
})

//payload to ładunek to co chcemy przekazac do reducera

export const deleteRate = (id) => ({
    type: DELETE,
    payload: {
        id,
    }
})


export  const editRate = ({author, comment, rate, id}) => ({
    type: EDIT,
    payload: {
        author,
        rate,
        comment,
        id,
    }
})


// są to akcje w Redux