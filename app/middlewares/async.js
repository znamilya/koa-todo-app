export default function async() {
    return next => action => {
        const { promise, type, ...rest } = action;
        const SUCCESS = type;
        const REQUEST = `${type}_REQUEST`;
        const FAILURE = `${type}_FAILURE`;

        if (!promise) {
            return next(action);
        }

        next({ type: REQUEST, ...rest });

        return promise
            .then(response => {
                next({
                    ...rest,
                    type: SUCCESS,
                    data: response.data
                });
            }, response => {
                next({
                    ...rest,
                    type: FAILURE,
                    errors: response.errors,
                });
            });
    };
}
