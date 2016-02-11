'use strict';

import React, { PropTypes }     from 'react';

import Quote                    from 'components/Quote/Quote';

import './Quotes.styl';


class Quotes extends React.Component {

    static propTypes = {
        items: PropTypes.array,
    };

    static defaultProps = {
        items: [],
    };


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    renderItems() {
        return this.props.items.map((item, i) => {
            return (
                <Quote {...item} key={i} />
            )
        })
    }

    render() {
        return (
            <div className="quotes">
                {this.renderItems()}
            </div>
        )
    }
}


export default Quotes;
