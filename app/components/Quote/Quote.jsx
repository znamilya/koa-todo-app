'use strict';

import React, { PropTypes }     from 'react';

import './Quote.styl';


class Quote extends React.Component {

    static propTypes = {
        text:     PropTypes.string.isRequired,
        author:   PropTypes.string,
        source:   PropTypes.string,
        onDelete: PropTypes.func,
    };

    static defaultProps = {
        author:   '',
        source:   '',
        onDelete: () => {},
    };


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div className="quote">
                <div className="quote__text">{this.props.text}</div>
                <div className="quote__author">{this.props.author}</div>
                <div className="quote__source">{this.props.source}</div>
                <div onClick={this.props.onDelete}>delete</div>
            </div>
        )
    }
}


export default Quote;
