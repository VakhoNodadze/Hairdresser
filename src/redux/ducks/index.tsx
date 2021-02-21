import { combineReducers } from 'redux';

import register from './authorization';
import chooseDresser from './userInfo';

export const rootReducer = combineReducers({
  register,
  chooseDresser
});

export type AppState = ReturnType<typeof rootReducer>
