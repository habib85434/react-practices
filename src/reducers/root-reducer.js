import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import appStateReducer from './app-state';
import userListReducer from './user-list-reducer';
import { errorReducer } from './error-reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    appState: appStateReducer,
    error: errorReducer,
    userListData: userListReducer,
  });

