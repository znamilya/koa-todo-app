import constants    from 'constants/quotes';


export default function (state = [], action) {
    switch (action.type) {
        case constants.FETCH:
            return action.data;

        default:
            return state;
    }
}