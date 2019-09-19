import {GET_ALL_ITEM} from '../../action/actionType';
import uuid from 'uuid';

const orderData = {
    ordList:[
        {id:uuid(), shopname:'啃得起', foods:['tea1','沙拉',"奶茶",'阔落'], tel:'15678904397',status:'订单已送达'},
        {id:uuid(), shopname:'kfc', foods:['tea2','沙拉',"奶茶",'阔落'], tel:'1567454397',status:'订单已送达'},
        {id:uuid(), shopname:'餐厅', foods:['tea3','沙拉',"奶茶",'阔落'], tel:'13478904397',status:'订单已送达'},
        {id:uuid(), shopname:'dd烤肉饭', foods:['tea4','沙拉',"奶茶",'阔落'], tel:'18678904397',status:'订单已送达'},
        {id:uuid(), shopname:'拉面店', foods:['tea5','沙拉',"奶茶",'阔落'], tel:'18778904397',status:'订单已送达'},
        {id:uuid(), shopname:'奶茶店', foods:['tea6','沙拉',"奶茶",'阔落'], tel:'456543343',status:'订单已送达'},
        {id:uuid(), shopname:'带韩拌饭', foods:['tea7','沙拉',"奶茶",'阔落'], tel:'12313213132',status:'订单已送达'}
    ]
};


 let orderindex = (state = orderData, action)=>{
    console.log('state',state);

    if(action.type === GET_ALL_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        return newState;
    }

    return state;
}

export default orderindex;