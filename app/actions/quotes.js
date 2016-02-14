'use strict';

import axios        from 'axios';

import constants    from 'constants/quotes';


/**
 * Загрузить список цитат
 * 
 * @param  {Object} params       Параметры
 * @param  {Number} params.limit Максимальное количество цитат которое нужно загрузить
 * @return {Object}
 */
export function load(params) {
    return {
        type: constants.FETCH,
        promise: axios.get('/api/quotes')
    }
}


/**
 * Удалить одну цитату
 * 
 * @param  {Number} id id цитаты которую нужно удаоить
 * @return {Object}
 */
export function deleteOne(id) {
    if (!id) {
        throw new Error('Quote id must not be empty!');
    }

    return {
        type: constants.DELETE,
        promise: axios.delete(`/api/quotes/${id}`)
    }
}