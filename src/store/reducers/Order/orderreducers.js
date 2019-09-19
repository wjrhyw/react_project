import {GET_ALL_ITEM} from '../../action/actionType';
import uuid from 'uuid';

const orderData = {
    ordList:[
        {id:uuid(), shopname:'啃得起', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'豆腐',foodprice:23.3},{foodname:'阔落',foodprice:3.3}], tel:'15678904397',status:'订单已送达'},
        {id:uuid(), shopname:'kfc', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'1567454397',status:'订单已送达'},
        {id:uuid(), shopname:'餐厅', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'13478904397',status:'订单已送达'},
        {id:uuid(), shopname:'dd烤肉饭', foods:[{foodname:'tea1',foodprice:9},{foodname:'牛排',foodprice:29.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'18678904397',status:'订单已送达'},
        {id:uuid(), shopname:'拉面店', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'18778904397',status:'订单已送达'},
        {id:uuid(), shopname:'奶茶店', foods:[{foodname:'tea1',foodprice:9},{foodname:'牛排',foodprice:29.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'456543343',status:'订单已送达'},
        {id:uuid(), shopname:'带韩拌饭', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'12313213132',status:'订单已送达'}
    ]
};


 let orderindex = (state = orderData, action)=>{

    if(action.type === GET_ALL_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        return newState;
    }

    return state;
}

export default orderindex;