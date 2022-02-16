import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import modelReducer from './reducers/model.reducer';

const rootReducer = combineReducers({
	modelReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
