import { combineReducers } from 'redux'
import todosReducer from './todosReducer';
import formReducer from './formReducer';

export default combineReducers({
  todos: todosReducer,
  form: formReducer,
});