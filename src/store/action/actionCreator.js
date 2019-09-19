import {GET_ALL_ITEM} from './actionType'
//import store from "./../reducers/Order/index";

export const getAllItemAction = (todos) =>({
    type: GET_ALL_ITEM,
    todos
}); 