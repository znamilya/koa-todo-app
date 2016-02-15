import React, { PropTypes }     from 'react';
import ReactDOM                 from 'react-dom';
import pureRender               from 'pure-render-decorator';

import './FormAdd.styl';


/**
 * Описание компонента
 * 
 * @author 
 */
@pureRender
class FormAdd extends React.Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    static defaultProps = {
        onSubmit: () => {},
    };

    constructor(props) {
        super(props);

        this.bindHandlers();
    }

    /* ------------------------------------------------------------------------------------------ */
    /* REACT                                                                                      */
    /* ------------------------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------------------------ */
    /* METHODS                                                                                    */
    /* ------------------------------------------------------------------------------------------ */
    bindHandlers() {
        ['handleSubmit'].forEach(function (handler) {
            this[handler] = this[handler].bind(this);
        }, this);
    }


    /* ------------------------------------------------------------------------------------------ */
    /* HANDLERS                                                                                   */
    /* ------------------------------------------------------------------------------------------ */
    handleSubmit(e) {
        e.preventDefault();

        const text   = ReactDOM.findDOMNode(this.refs.text).value;
        const author = ReactDOM.findDOMNode(this.refs.author).value.slice(0, 50);
        const source = ReactDOM.findDOMNode(this.refs.source).value.slice(0, 50);

        if (!text) {
            alert('Введите текст цитаты!');
            return;
        }

        this.props.onSubmit({
            text,
            author,
            source
        });
    }


    /* ------------------------------------------------------------------------------------------ */
    /* RENDER                                                                                     */
    /* ------------------------------------------------------------------------------------------ */
    render() {
        return (
            <form className="form-add" onSubmit={this.handleSubmit}>
                <div>
                    <textarea name="text" ref="text"></textarea>
                </div>
                <div>
                    <input type="text" name="author" ref="author" />
                </div>
                <div>
                    <input type="text" name="source" ref="source" />
                </div>
                <button>Add</button>
            </form>
        );
    }
}


export default FormAdd;