import { combineReducers } from 'redux';
import CatReducer from './cats.reducer';

const rootReducer = combineReducers({
    cats: CatReducer
});

export default rootReducer;