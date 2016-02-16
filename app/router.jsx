import React                                        from 'react';
import { Router, Route, IndexRedirect,
         Redirect, IndexRoute, browserHistory }     from 'react-router';

// Containers
import App                                          from 'containers/App/App';



let Hello = function (msg, color = 'white') {
    return function ({children}) {
        return (
            <div>
                <div style={{background: color}}>Hello, {msg}!</div>
                {children}
            </div>
        );
    }
}


export default function getStore(store) {

    return (
        <Router history={browserHistory}>
            <Route path="/" component={Hello('App')}>
                <IndexRoute component={Hello('Quotes')} />
                <Route path="login" component={Hello('Login')} />

                {/* 404 */}
                <Route status={404} path="*" component={Hello('404 page')} />
            </Route>
        </Router>
    )
}
