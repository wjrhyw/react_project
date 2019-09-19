import React from 'react';
import '../../assets/css/orders.css';
import { Button } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import uuid from 'uuid';
import {connect} from 'react-redux';

class DingDancompItemInf extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        let {id} = this.props.match.params;
        const {ordList} = this.props;
        let ordInfo =  ordList.find((item)=>{
            return item.id === id;
        });

        if(!ordInfo){
            this.props.history.push('/OrderInf');
            return null;
        }
        return (<div id = 'ItemInfDad'>
                    <div >back</div>
                    <div className="title_status"><h2>{ordInfo.status}</h2></div>
                    <div>编号: {ordInfo.id}</div>
                    <p>店铺名称: {ordInfo.shopname}</p>
                    <div>菜单: {ordInfo.foods.map((item,key)=><div key = {key}>{item}</div>)}</div>
                    <p>电话: {ordInfo.tel}</p>
                </div>)
    }
}

const mapStateToProps = (state)=> {
    return {
        ordList: state.orderindex.ordList
    }
};


export default connect(mapStateToProps, null)(DingDancompItemInf);