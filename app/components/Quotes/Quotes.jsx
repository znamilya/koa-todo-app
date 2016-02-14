'use strict';

import React, { PropTypes }     from 'react';

import Quote                    from 'components/Quote/Quote';

import './Quotes.styl';


class Quotes extends React.Component {

    static propTypes = {
        items:    PropTypes.array,
        onDelete: PropTypes.func,
    };

    static defaultProps = {
        items:        [],
        onDeleteItem: () => {},
    };


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    renderItems() {
        return this.props.items.map((item, i) => {
            const deleteHandler = this.props.onDeleteItem.bind(null, item._id);

            return (
                <Quote {...item} key={i} onDelete={deleteHandler} />
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