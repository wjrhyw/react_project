import { combineReducers } from 'redux'
import takeoutindex from './takeout/takeoutreducers';
import orderindex from './Order/orderreducers';
import findindex from './Find/findreducers'
import businessindex from './Find/businessreducers'

const indexReducers=combineReducers({
    takeoutindex,
    orderindex,
    findindex,
    businessindex
})
export default indexReducers;
