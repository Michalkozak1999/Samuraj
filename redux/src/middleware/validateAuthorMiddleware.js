import {ADD} from '../actions/appActions'
import store from '../store/store'

export const validateAuthorMiddlewate = store => next => action => {
    console.log("jesteśmy w middlewarze")
    console.log(action)
    if(action.type === ADD && !action.payload.author.length){
        console.warn("author nie ma imienia i znazwiska")
        return
    }





    next(action)
}