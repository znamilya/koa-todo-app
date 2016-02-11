export default function async() {
    return next => action => {
        const { promise, type } = action;
        const SUCCESS = type;
        const REQUEST = `${type}_REQUEST`;
        const FAILURE = `${type}_FAILURE`;

        if (!promise) {
            return next(action);
        }

        next({ type: REQUEST });

        return promise
            .then(response => {
                return response.json();
            }, response => {
                next({
                    type: FAILURE,
                    errors: response.errors
                });
            })
            .then(data => {
                next({
                    type: SUCCESS,
                    data
                });
            })
    };
}
