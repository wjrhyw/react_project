import React from 'react';
import '../../assets/css/Orders/orders.css';
import {Button} from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import uuid from 'uuid';

class DingDancompItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        let fod_price= 0;
        let fod_price_fix1 = 0;
        let mjdis = 0;
        let hbdis = 0;
        let manjian_disck = this.props.orders.discount.manjian_dis;
        let hongbao_disck = this.props.orders.discount.hongbao_dis;
        let delivery = this.props.orders.delivery;

        this.props.orders.foods.forEach(element => {
            fod_price = fod_price + element.foodprice;
            //console.log(fod_price);
            fod_price_fix1 = parseFloat(fod_price.toFixed(1));
        });

        if(JSON.stringify(manjian_disck) != "{}")
        {
            mjdis = manjian_disck.discount_val;
        }
        
        if(JSON.stringify(hongbao_disck) != "{}")
        {
            hbdis = hongbao_disck.discount_val;
        }
        let fod_price_fix2 = fod_price_fix1 + delivery.deliver_price - hbdis - mjdis ;
        let fod_price_fix = parseFloat(fod_price_fix2.toFixed(1));
        
        return(
            <div className="CardOutSet">
                <div className="CardShopIcon">
                    <img src={require(`../../assets/img/shop/${this.props.orders.shopname}.jpg`)}/>
                </div>
                <div className="CardInsideRight">
                    <div className="CardInsideRighchild1">
                        <NavLink activeStyle={{color:'black'}} to={`/orders/${this.props.orders.id}`}>
                            <div className="MainInf">
                                <div className="MaininfTop">
                                    <div className="ShopName">
                                       {this.props.orders.shopname}
                                    </div>
                                    <div className="ArrowRight"></div>
                                </div>
                                <div className="Time">
                                    2019-07-07 16:00
                                </div>
                            </div>
                        </NavLink>
                       
                        <div className="status">
                            {this.props.orders.status}
                        </div>
                    </div>
                    <div className="CardInsideRighchild2">
                        <div className ="orderItem">{this.props.orders.foods.map((item,key)=>(
                                <span key={uuid()}>{item.foodname},</span>))}
                        </div>
                        <div className ="orderPrice">￥{fod_price_fix}</div>
                    </div>
                    <div className="CardInsideRighchild3">
                            <Button className="Carildbtn" size="small">再来一单</Button>
                            <Button className="Carildbtn" size="small">删除订单</Button>
                    </div>
                </div>
            </div>
        )
    }
}

//export {fod_price_fix};
export default DingDancompItem;
