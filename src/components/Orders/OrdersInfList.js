import React from 'react';
import '../../assets/css/Orders/orders.css';
import {Button,NavBar, Icon } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import uuid from 'uuid';
import DingDancompItem from './DingDancompItem'

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