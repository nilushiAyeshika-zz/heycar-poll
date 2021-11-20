import { combineReducers } from 'redux';

import { key as questionState, reducer as questionStateReducer } from './features/Questions';

export const RootReducer = () => combineReducers({
  [questionState]: questionStateReducer,
});

export default RootReducer
