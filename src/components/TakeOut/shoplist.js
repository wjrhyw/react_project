import request from '../../utils/request';
import React from 'react';
import Index from '../Index';
class ShopList extends React.Component{
    constructor(){
        super();
        Index.hide();
    }
    render(){
        return (
            <div>
                商铺列表页
            </div>
        )
    }
    componentWillMount(){
        request('get','/shopping/restaurants?latitude=31.22967&longitude=121.4762').then((res)=>{
            console.log(res);
        })
    }
}
export default ShopList