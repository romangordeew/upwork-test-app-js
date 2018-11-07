import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import event from './event'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['event1'],
};

export default persistReducer(
  persistConfig,
  combineReducers({
    event,
  })
);
