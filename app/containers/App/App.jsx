'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import Quotes                   from 'components/Quotes/Quotes';
import * as quotesActions       from 'actions/quotes';

import './App.styl';


@connect(
    (state, props) => {
        return {
            quotes: state.quotes,
        }
    }, 
    (dispatch) => {
        return {
            loadQuotes:  bindActionCreators(quotesActions.load, dispatch),
            deleteQuote: bindActionCreators(quotesActions.deleteOne, dispatch),
        }
    }
)
class App extends React.Component {

    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                      */
    /* ------------------------------------------------------------------------------------------ */
    componentWillMount() {
        this.props.loadQuotes();
    }

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div className="app">
                <h1 className="app__title">Todo</h1>
                <div className="app__body">
                    <Quotes items={this.props.quotes} onDeleteItem={this.props.deleteQuote} />
                </div>
            </div>
        )
    }
}


export default App;
