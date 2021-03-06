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
                <div className="form-group">
                    <label htmlFor="form-add-text">Текст</label>
                    <textarea
                        className="form-control"
                        id="form-add-text"
                        name="text"
                        rows="5"
                        placeholder="Каждая жизнь — это борьба за то, чтобы стать самим собой"
                        ref="text"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="form-add-author">Автор</label>
                    <input
                        className="form-control"
                        id="form-add-author"
                        name="author"
                        placeholder="Хосе Ортега-и-Гассет"
                        ref="author"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="form-add-source">Источник</label>
                    <input
                        className="form-control"
                        id="form-add-source"
                        name="source"
                        placeholder="Восстание масс"
                        ref="source"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Войти</button>
                </div>
            </form>
        );
    }
}


export default FormAdd;