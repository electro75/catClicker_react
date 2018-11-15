import { combineReducers } from 'redux';

import CatReducer from './cats.reducer';
import ActiveCatIndex from './active-cat.reducer';

const rootReducer = combineReducers({
    cats: CatReducer,
    activeCat: ActiveCatIndex
});

export default rootReducer;