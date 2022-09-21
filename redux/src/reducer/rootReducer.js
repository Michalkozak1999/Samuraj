// bedzie zawierał minfo o naszych reducerach

import { combineReducers } from 'redux'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
    rates: appReducer,
})

// do środka przekazuemy wszytskie nasze reducery