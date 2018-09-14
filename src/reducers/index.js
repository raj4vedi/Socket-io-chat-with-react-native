import { combineReducers } from 'redux';
import ConnectionReducer from './ConnectionReducer';
import ChatReducer from './ChatReducer';

export default combineReducers({
  connection: ConnectionReducer,
  chat: ChatReducer,
});
