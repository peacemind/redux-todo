import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from '../reduce/todoReducer';

const middleware = [ thunk ];

/*
  reducer is the first argument
  initial state is the second argument, then
  middleware
*/
// Can use a preloaded initialState if available
export default (initialState) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware),
  )
  return store;
}
