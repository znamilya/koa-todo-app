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
 * Сохранить новую цитату
 * 
 * @param  {Object} params        Параметры
 * @param  {Object} params.text   Текст цитаты
 * @param  {Object} params.author Автор
 * @param  {Object} params.source Источник
 * @return {Object}
 */
export function saveNewOne(params) {
    if (!params.text) {
        throw new Error('Quote must contains any text!');
    }

    return {
        type: constants.SAVE_NEW,
        promise: axios.post(`/api/quotes/`, params),
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