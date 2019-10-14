import uuid from 'uuid';

export function uuidFix(){
    let idfix = uuid();
    let reg = new RegExp("-","g");
    let a = idfix.replace(reg,"");
    let idfixed = a.substr(0,25);
    return idfixed;
}

const orderData = {
    ordList:[
        {id:uuidFix(),delivery:{deliver_way:"蜂鸟专送",deliver_price:10},payment:'在线支付', shopname:'啃得起', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'豆腐',foodprice:23.3},{foodname:'阔落',foodprice:3.3}], tel:'15678904397',discount:{hongbao_dis:{discount_way:"红包",discount_val:10},manjian_dis:{discount_way:"店铺满减",discount_val:20}},status:'订单已送达',createTime:"2019-07-07 16:00"},
        {id:uuidFix(),delivery:{deliver_way:"蜂鸟专送",deliver_price:10},payment:'现金支付', shopname:'kfc', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'1567454397',discount:{hongbao_dis:{discount_way:"红包",discount_val:10},manjian_dis:{}},status:'订单已送达',createTime:"2019-08-07 16:00"},
        {id:uuidFix(),delivery:{deliver_way:"普通配送",deliver_price:5},payment:'在线支付', shopname:'餐厅', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'13478904397',discount:{hongbao_dis:{discount_way:"红包",discount_val:10},manjian_dis:{discount_way:"店铺满减",discount_val:20}},status:'订单已送达',createTime:"2019-07-07 16:00"},
        {id:uuidFix(),delivery:{deliver_way:"蜂鸟专送",deliver_price:10},payment:'现金支付', shopname:'dd烤肉饭', foods:[{foodname:'tea1',foodprice:9},{foodname:'牛排',foodprice:29.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'18678904397',discount:{hongbao_dis:{},manjian_dis:{discount_way:"店铺满减",discount_val:20}},status:'订单已送达',createTime:"2019-08-07 16:00"},
        {id:uuidFix(),delivery:{deliver_way:"普通配送",deliver_price:0},payment:'在线支付', shopname:'拉面店', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'18778904397',discount:{hongbao_dis:{},manjian_dis:{}},status:'订单已送达',createTime:"2019-07-27 16:00"},
        {id:uuidFix(),delivery:{deliver_way:"普通配送",deliver_price:5},payment:'现金支付', shopname:'奶茶店', foods:[{foodname:'tea1',foodprice:9},{foodname:'牛排',foodprice:29.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'456543343',discount:{hongbao_dis:{discount_way:"红包",discount_val:10},manjian_dis:{discount_way:"店铺满减",discount_val:20}},status:'订单已送达',createTime:"2019-09-07 16:00"},
        {id:uuidFix(),delivery:{deliver_way:"蜂鸟专送",deliver_price:10},payment:'现金支付', shopname:'带韩拌饭', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'12313213132',discount:{hongbao_dis:{},manjian_dis:{}},status:'订单已送达',createTime:"2019-05-07 16:00"}
    ]
    // ordList:[
    //     {id:uuidFix(),delivery:{deliver_way:"蜂鸟专送",deliver_price:10},payment:'在线支付', shopname:'啃得起', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'豆腐',foodprice:23.3},{foodname:'阔落',foodprice:3.3}], tel:'15678904397',discount:{hongbao_dis:{discount_way:"红包",discount_val:10},manjian_dis:{discount_way:"店铺满减",discount_val:20}},status:'订单已送达'},
    //     {id:uuidFix(),delivery:{deliver_way:"蜂鸟专送",deliver_price:10},payment:'现金支付', shopname:'kfc', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'1567454397',discount:{hongbao_dis:{discount_way:"红包",discount_val:10},manjian_dis:{}},status:'订单已送达'},
    //     {id:uuidFix(),delivery:{deliver_way:"普通配送",deliver_price:5},payment:'在线支付', shopname:'餐厅', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'13478904397',discount:{hongbao_dis:{discount_way:"红包",discount_val:10},manjian_dis:{discount_way:"店铺满减",discount_val:20}},status:'订单已送达'},
    //     {id:uuidFix(),delivery:{deliver_way:"蜂鸟专送",deliver_price:10},payment:'现金支付', shopname:'dd烤肉饭', foods:[{foodname:'tea1',foodprice:9},{foodname:'牛排',foodprice:29.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'18678904397',discount:{hongbao_dis:{},manjian_dis:{discount_way:"店铺满减",discount_val:20}},status:'订单已送达'},
    //     {id:uuidFix(),delivery:{deliver_way:"普通配送",deliver_price:0},payment:'在线支付', shopname:'拉面店', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'18778904397',discount:{hongbao_dis:{},manjian_dis:{}},status:'订单已送达'},
    //     {id:uuidFix(),delivery:{deliver_way:"普通配送",deliver_price:5},payment:'现金支付', shopname:'奶茶店', foods:[{foodname:'tea1',foodprice:9},{foodname:'牛排',foodprice:29.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'456543343',discount:{hongbao_dis:{discount_way:"红包",discount_val:10},manjian_dis:{discount_way:"店铺满减",discount_val:20}},status:'订单已送达'},
    //     {id:uuidFix(),delivery:{deliver_way:"蜂鸟专送",deliver_price:10},payment:'现金支付', shopname:'带韩拌饭', foods:[{foodname:'tea1',foodprice:9},{foodname:'沙拉',foodprice:23.3},{foodname:'奶茶',foodprice:13.3},{foodname:'阔落',foodprice:3.3}], tel:'12313213132',discount:{hongbao_dis:{},manjian_dis:{}},status:'订单已送达'}
    // ]
};


 let orderindex = (state = orderData, action)=>{

    if(action.type === 'get_all_item'){
        const newState = JSON.parse(JSON.stringify(state));
        return newState;
    }

    if(action.type === 'del_order_item'){
        const newState = JSON.parse(JSON.stringify(state));
       
        newState.ordList.forEach((orders, index) => {
            if (orders.id === action.orderId) {
                newState.ordList.splice(index, 1);
            }
        });
        
        //newState.finishedCount = finishedCount;
        return newState;
    }

    if(action.type === 'add_order_item'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.ordList.push(action.orderinfs);
        return newState;
    }

    return state;
}

export default orderindex;