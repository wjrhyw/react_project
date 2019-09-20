import { combineReducers } from 'redux'
import takeoutindex from './takeout/takeoutreducers';
import orderindex from './Order/orderreducers';
import findindex from './Find/findreducers'

const indexReducers=combineReducers({
    takeoutindex,
    orderindex,
    findindex
})
export default indexReducers;
