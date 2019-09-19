import React from 'react';
import '../../assets/css/orders.css';
import { Button } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import uuid from 'uuid';

class DingDancompItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="CardOutSet">
                <div className="CardShopIcon">
                </div>
                <div className="CardInsideRight">
                    <div className="CardInsideRighchild1">
                        <NavLink activeStyle={{color:'black'}} to={`/OrderInf/${this.props.orders.id}`}>
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
                        <div className ="orderItem">asdad</div>
                        <div className ="orderPrice">19.6</div>
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
        console.log(ordList);
        return(
            <>
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