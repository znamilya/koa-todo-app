'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import Quotes                   from 'components/Quotes/Quotes';
import FormAdd                  from 'components/FormAdd/FormAdd';
import * as quotesActions       from 'actions/quotes';


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
class App extends React.Component {

    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                      */
    /* ------------------------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div>
                <h1>Добавить цитату</h1>
                <FormAdd />
            </div>
        );
    }
}


export default App;
