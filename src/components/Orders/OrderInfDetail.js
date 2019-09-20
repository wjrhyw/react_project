import React from 'react';
import '../../assets/css/Orders/orders.css';
import { Icon, Grid } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import uuid from 'uuid';

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
            // console.log(this.props.history);
            // this.props.history.go(-1);
            return null;
        }
        return (<div id = 'ItemInfDad'>
                    <div id="back_btn" onClick={()=> window.history.back(-2)}><Icon type="left" /></div>
                    <div className="title_status"><h2>{ordInfo.status}</h2></div>
                    <div className="Inf_card">
                        <div className="flexleft">店铺名称: {ordInfo.shopname}</div>
                        <div style={{textAlign:"left"}}>菜单: {ordInfo.foods.map((item,key)=>(
                            <div className="food_item" key={uuid()}>
                                <span className="span_font_mid"><img className="img_border" src={require(`../../assets/img/foods/${item.foodname}.jpg`)}/></span>
                                <span className="float_foodname span_font_mid" key = {key}>{item.foodname}</span>
                                <span className="span_font_mid">￥{item.foodprice}</span>
                            </div>)
                            )
                            }
                        </div>
                        
                    </div>

                    <div className="Inf_card">
                        <div className="flexleft">编号: {ordInfo.id}</div>
                        <div className="flexleft">电话: {ordInfo.tel}</div>
                    </div>
                </div>)
    }
}

const mapStateToProps = (state)=> {
    return {
        ordList: state.orderindex.ordList
    }
};


export default connect(mapStateToProps, null)(DingDancompItemInf);