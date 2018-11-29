import {combineReducers} from 'redux';

import message from './message.js';
import purchases from './purchases.js';

export default combineReducers({
  message,
  purchases,
});
