'use strict';

import constants    from 'constants/quotes';


/**
 * Загрузить список цитат
 * 
 * @param  {Object} params       Параметры
 * @param  {Object} params.limit Максимальное количество цитат которое нужно загрузить
 * @return {Object}
 */
export function load(params) {
    return {
        type: constants.FETCH,
        promise: fetch('/api/quotes')
    }
}