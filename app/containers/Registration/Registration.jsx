'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import FormRegistration         from 'components/FormRegistration/FormRegistration';


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
class Registration extends React.Component {

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div>
                <h1>Регистрация</h1>
                <FormRegistration />
            </div>
        );
    }
}


export default Registration;
