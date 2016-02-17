'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import FormLogin                from 'components/FormLogin/FormLogin';


@connect(
    (state, props) => {
        return {
        }
    }, 
    (dispatch) => {
        return {
        }
    }
)
class Login extends React.Component {

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div>
                <h1>Войти</h1>
                <FormLogin />
            </div>
        );
    }
}


export default Login;
