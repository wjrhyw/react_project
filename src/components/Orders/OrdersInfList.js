import React from 'react';
import '../../assets/css/Orders/orders.css';
import {Button,NavBar, Icon } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import uuid from 'uuid';

class DingDancompItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        let fod_price= 0;
        let fod_price_fix = 0;
        this.props.orders.foods.forEach(element => {
            fod_price = fod_price + element.foodprice;
            fod_price_fix = fod_price.toFixed(1);
        });
        return(
            <div className="CardOutSet">
                <div className="CardShopIcon">
                    <img src={require(`../../assets/img/shop/${this.props.orders.shopname}.jpg`)}/>
                </div>
                <div className="CardInsideRight">
                    <div className="CardInsideRighchild1">
                        <NavLink activeStyle={{color:'black'}} to={`/${this.props.orders.id}`}>
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

class DingDancompItemLists extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {ordList} = this.props;
        return(
            <>
            <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            >订单</NavBar>
            {
            ordList.map((item,index)=>
            <DingDancompItem orders={item}  key={uuid()}></DingDancompItem>)
            }
            </>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        ordList: state.orderindex.ordList
    }
};

let DingDancompItemList = connect(mapStateToProps, null)(DingDancompItemLists);
export default DingDancompItemList;