'use strict';

import React            from 'react';
import ReactDOM         from 'react-dom';
import { Provider }     from 'react-redux'

import configureStore   from 'store/configureStore';
import getRouter        from './router.jsx';


const store = configureStore();
let router  = getRouter(store);


ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);