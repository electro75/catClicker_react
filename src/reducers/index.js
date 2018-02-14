import { combineReducers } from 'redux';

import CatReducer from './cats.reducer';
import ActiveCatReducer from './active-cat.reducer';

const rootReducer = combineReducers({
    cats: CatReducer,
    activeCat: ActiveCatReducer
});

export default rootReducer;