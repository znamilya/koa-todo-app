'use strict';

import React, { PropTypes }     from 'react';
import ReactDOM                 from 'react-dom';
import pureRender               from 'pure-render-decorator';


@pureRender
class FormLogin extends React.Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    static defaultProps = {
        onSubmit: () => {},
    };

    constructor(props) {
        super(props);

        this.bindHandlers();
    }

    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                      */
    /* ------------------------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------------------------ */
    /* METHODS                                                                                    */
    /* ------------------------------------------------------------------------------------------ */
    bindHandlers() {
        [].forEach(function (handler) {
            this[handler] = this[handler].bind(this);
        }, this);
    }


    /* ------------------------------------------------------------------------------------------ */
    /* HANDLERS                                                                                   */
    /* ------------------------------------------------------------------------------------------ */


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <form action="">
                <div className="form-group">
                    <label htmlFor="form-signin-email">Email</label>
                    <input
                        className="form-control"
                        id="form-signin-email"
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="form-signin-password">Password</label>
                    <input
                        className="form-control"
                        id="form-signin-password"
                        type="password"
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="form-signin-remember">
                        <input type="checkbox" id="form-signin-remember" name="remember" />
                        {' '}
                        Запомнить
                    </label>
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Войти</button>
                </div>
            </form>
        );
    }
}


export default FormLogin;