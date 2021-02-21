import { combineReducers } from 'redux';

import register from './authorization';

export const rootReducer = combineReducers({
  register
});

export type AppState = ReturnType<typeof rootReducer>
