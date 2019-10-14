//import store from "./../reducers/Order/index";

export const getAllItemAction = (todos) =>({
    type: 'get_all_item',
    todos
}); 

export const getDelItemAction = (orderId) => ({
    type: 'del_order_item',
    orderId
});

export const AddItemAction = (orderinfs) => ({
    type: 'add_order_item',
    orderinfs
});