//import store from "./../reducers/Order/index";

export const getAllItemAction = (todos) =>({
    type: 'get_all_item',
    todos
}); 

export const getDelItemAction = (orderId) => ({
    type: 'del_order_item',
    orderId
});

export const AddItemAction = (orderId) => ({
    type: 'del_order_item',
    orderId
});