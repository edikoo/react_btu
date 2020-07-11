import areaReducer from './areaReducer';
import areasReducer from './areasReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    areaReducer: areaReducer,
    areasReducer: areasReducer,
});

export default rootReducer;