import { combineReducers } from 'redux';
import testReducer from './reducers/testReducer';
const rootReducer = combineReducers({
  test: testReducer
});
// const rootReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
//   directory: directoryReducer,
//   shop: shopReducer
// });
export default rootReducer;