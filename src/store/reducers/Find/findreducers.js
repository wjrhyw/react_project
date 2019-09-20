import {GET_ALL_FIND} from '../../action/actionType';
import uuid from 'uuid';

let findindex = (state = {list:[]}, action)=>{
    //{ name:'xx',obj:{name:'sss'} }
    if(action.type == GET_ALL_FIND){
        console.log('这被执行');
        return Object.assign({}, state, { list: action.list });
        // var NewState=JSON.stringify(state);
        // NewState=JSON.parse(NewState);
        // action.list.map((val)=>{
        //     NewState.list.push(val);
        // })
        // return  NewState
    }

    return state;
}

export default findindex;
