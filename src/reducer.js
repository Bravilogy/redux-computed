import { map, when, not, propEq, evolve } from 'ramda';

const toggleActive = (name, users) =>
    map(when(propEq('name', name), evolve({ active: not })))(users);

const initialState = {
    message: '',
    users: [{ name: 'Jane', active: true }, { name: 'John', active: false }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_ACTIVE':
            return {
                ...state,
                users: toggleActive(action.name, state.users)
            };
        default:
            return state;
    }
}
