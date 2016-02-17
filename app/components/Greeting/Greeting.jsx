'use strict';

import React, { PropTypes }     from 'react';


class Greeting extends React.Component {

    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <div className="greeting">
                <p className="lead">Привет, тут короч можно хранить цитатки. Регайся, дружок!</p>
            </div>
        )
    }
}


export default Greeting;
