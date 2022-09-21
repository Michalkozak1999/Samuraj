// miejsce gdzie bedziemy przechowywac nasz store ale musimy go stworzyc na pocxzatek
import {rootReducer} from '../reducer/rootReducer'

import {applyMiddleware,  createStore } from "redux";
import { validateAuthorMiddlewate } from '../middleware/validateAuthorMiddleware';

const store = createStore(rootReducer, applyMiddleware(validateAuthorMiddlewate))


//tworzymy store i przekazujemy nasze reducery


export default store;