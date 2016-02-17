'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import FormRegistration         from 'components/FormRegistration/FormRegistration';
import Greeting                 from 'components/Greeting/Greeting';
import Quotes                   from 'components/Quotes/Quotes';
import FormAdd                  from 'components/FormAdd/FormAdd';
import * as quotesActions       from 'actions/quotes';


@connect(
    (state, props) => {
        return {
            user:   state.user,
            quotes: state.quotes,
        }
    }, 
    (dispatch) => {
        return {
            loadQuotes: bindActionCreators(quotesActions.load, dispatch),
        }
    }
)
class App extends React.Component {

    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                      */
    /* ------------------------------------------------------------------------------------------ */
    componentWillMount() {
        if (this.props.user) {
            this.props.loadQuotes();
        }
    }

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        let rootElem;

        if (this.props.user) {
            return <Quotes items={this.props.quotes} />;
        }

        return (
            <div>
                <div className="row">
                    <Greeting />
                </div>
                <div className="row">
                    <FormRegistration />
                </div>
            </div>
        );
    }
}


export default App;
