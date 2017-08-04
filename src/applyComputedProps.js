/**
 * Creates a store enhancer that accepts an object of {key} {value} pairs, where
 * {values} are functions, that will run after the state updates through
 * actions and the result will be available under the {key} provided.
 *
 * It is the same as adding a new property to the state object within the reducer,
 * except each function receives the whole state object. Particularly useful
 * for big applications, with multiple reducers composed together.
 *
 * @param {Object} computedProps Computed properties object.
 * @returns {Function} A store enhancer applying computed properties.
 */
export default function (computedProps) {
    return createStore => (reducer, preloadedState, enhancer) => {
        function applyComputedProps(reducer, props) {
            return function (state, action) {
                return Object.keys(computedProps)
                    .reduce((result, k) => ({
                        ...result,
                        [k]: props[k](result)
                    }), reducer(state, action));
            }
        }

        return createStore(Object.keys(computedProps).length
            ? applyComputedProps(reducer, computedProps)
            : reducer, preloadedState, enhancer);
    }
}

