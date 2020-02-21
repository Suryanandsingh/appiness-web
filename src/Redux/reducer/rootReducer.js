import { combineReducers } from 'redux';

import Dashboard from './dashboard';
import Auth from './authentication';

export default combineReducers({
    Auth,
    Dashboard
})
