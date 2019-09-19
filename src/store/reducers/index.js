import { combineReducers } from 'redux'
import takeoutindex from './takeout/takeoutreducers';
import orderindex from './Order/orderreducers';

const index_reducers=combineReducers({
    takeoutindex,
    orderindex
})
export default index_reducers