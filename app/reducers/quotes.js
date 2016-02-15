import constants    from 'constants/quotes';


export default function (state = [], action) {
    switch (action.type) {
        case constants.FETCH:
            return action.data;

        case constants.SAVE_NEW:
            return [
                ...state,
                action.data,
            ];

        default:
            return state;
    }
}