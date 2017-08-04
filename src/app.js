import reducer from './reducer';
import { createStore } from 'redux';

import applyComputedProps from './applyComputedProps';

const computed = {
    activeUsers: state => state.users.filter(user => user.active),
    activeUsersCount: state => state.activeUsers.length
};

const store = createStore(reducer, applyComputedProps(computed));
