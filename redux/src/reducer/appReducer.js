import {ADD , EDIT, DELETE} from '../actions/appActions'


 export const appReducer = (state = [], action) => {
     console.log('Będziemy tworzyć nowy stan aplikacji')
    switch (action.type){
        case ADD:

            return [...state, action.payload ]; // rozbijamy obiekty naszej tablicy ...state i dodajemy
            case EDIT:
            return state.map(currentstateElement => {
                if(currentstateElement.id !== action.payload.id){
                    return currentstateElement
                }

                    

                return ({
                    author: action.payload.author,
                    comment: action.payload.comment,
                    id: currentstateElement.id,
                    rate: action.payload.rate
                })
            });
            case DELETE:
                return state.filter(currentstateElement => currentstateElement.id !== action.payload.id)

                default:
                    console.warn(`Nie mamy akcji typu ${action.type}`)
                    return state
    }
}