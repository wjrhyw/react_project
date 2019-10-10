import { combineReducers } from 'redux'
import takeoutindex from './takeout/takeoutreducers';
import orderindex from './Order/orderreducers';
import findindex from './Find/findreducers';
import businessindex from './Find/businessreducers';
import commentreducers from "./Find/commentreducers"

const indexReducers=combineReducers({
    takeoutindex,
    orderindex,
    findindex,
    businessindex,
    commentreducers
})
export default indexReducers;
