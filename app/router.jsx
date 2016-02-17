import React                            from 'react';
import { Router, Route,
        IndexRedirect, Redirect,
        IndexRoute, browserHistory }    from 'react-router';

// Containers
import App                              from 'containers/App/App';
import Main                             from 'containers/Main/Main';
import Registration                     from 'containers/Registration/Registration';
import Login                            from 'containers/Login/Login';
import Add                              from 'containers/Add/Add';



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


export default function(store) {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Main} />
                <Route path="add" component={Add} />
                <Route path="login" component={Login} />
                <Route path="registration" component={Registration} />

                {/* 404 */}
                <Route status={404} path="*" component={Hello('404 page')} />
            </Route>
        </Router>
    )
}
