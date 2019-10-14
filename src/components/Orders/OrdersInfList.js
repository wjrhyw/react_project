import React from 'react';
import '../../assets/css/Orders/orders.css';
import {NavBar, Icon } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import uuid from 'uuid';
import DingDancompItem from './DingDancompItem'

class DingDancompItemList extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {ordList} = this.props;
        return(
            <>
            <NavBar
            mode="dark"
            >订单</NavBar>
            {
            ordList.map((item,index)=>
            <DingDancompItem orders={item}  key={uuid()}></DingDancompItem>)
            }
            </>
        )
    }
}

export default DingDancompItemList;