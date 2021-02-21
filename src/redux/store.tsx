import { createStore, applyMiddleware } from 'redux';
import { rootReducer, AppState } from './ducks';
import { Action } from './ducks/authorization';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = 
  createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, Action>))
  );