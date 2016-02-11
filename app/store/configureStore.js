import { createStore, applyMiddleware }     from 'redux';

import async                                from 'middlewares/async';
import rootReducer                          from 'reducers';


export default function (initialData) {
    return applyMiddleware(async)(createStore)(rootReducer, initialData);
}