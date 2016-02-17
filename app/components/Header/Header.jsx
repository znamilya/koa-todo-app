'use strict';

import React, { PropTypes }     from 'react';
import { Link }                 from 'react-router';

// import './Header.styl';


class Header extends React.Component {

    static propTypes = {
        user: PropTypes.object,
    };

    static defaultProps = {
        user: null
    };

    renderLogLinks() {
        if (this.props.user) {
            return (
                <li><Link to="/logout">Выйти</Link></li>
            );
        }

        return ([
            // <li key={0}><Link to="/registration">Зарегистрироваться</Link></li>,
            <li key={1}><Link to="/login">Войти</Link></li>,
        ]);
    }


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Quotes</Link>
                    </div>
                    <div className="navbar-right">
                        <div className="nav navbar-nav">
                            {this.renderLogLinks()}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Header;
