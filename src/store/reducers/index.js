import { combineReducers } from 'redux'
import takeoutindex from './takeout/takeoutreducers';
import orderindex from './Order/orderreducers';

const indexReducers=combineReducers({
    takeoutindex,
    orderindex
})
export default indexReducers;