'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import Header                   from 'components/Header/Header';
import FormAdd                  from 'components/FormAdd/FormAdd';
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
            loadQuotes:   bindActionCreators(quotesActions.load, dispatch),
            deleteQuote:  bindActionCreators(quotesActions.deleteOne, dispatch),
            saveNewQuote: bindActionCreators(quotesActions.saveNewOne, dispatch),
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
                        // <FormAdd onSubmit={this.props.saveNewQuote} />
                        // <Quotes items={this.props.quotes} onDeleteItem={this.props.deleteQuote} />
    render() {
        return (
            <div className="app">
                <div className="app__header">
                    <Header />
                </div>
                <div className="app__body">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
