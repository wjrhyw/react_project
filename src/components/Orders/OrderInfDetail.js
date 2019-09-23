import React from 'react';
import '../../assets/css/Orders/orders.css';
import { Icon, Grid } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import uuid from 'uuid';
import Index from '../Index';

class DingDancompItemInf extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        Index.hide();
    }

    backNavRender(){
        window.history.back(-2);
        Index.show();
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
                    <div id="back_btn" onClick={()=>{this.backNavRender()}}><Icon type="left" /></div>
                    <div className="title_status"><h2>{ordInfo.status}</h2></div>
                    <div className="Inf_card">
                        <div className="flexleft bold_font">{ordInfo.shopname}</div>
                        <div style={{textAlign:"left"}}>{ordInfo.foods.map((item,key)=>(
                            <div className="food_item" key={uuid()}>
                                <span className="span_font_mid"><img className="img_border" src={require(`../../assets/img/foods/${item.foodname}.jpg`)}/></span>
                                <span className="float_foodname span_font_mid" key = {key}>{item.foodname}</span>
                                <span style={{fontSize:"14px"}} className="span_font_mid bold_font">￥{item.foodprice}</span>
                            </div>)
                            )
                            }
                        </div>
                        
                    </div>

                    <div className="Inf_card">
                        <div className="flexleft bold_font">配送信息</div>
                        <div className="Inf_cardChild"><span>电话:</span> <span>{ordInfo.tel}</span></div>
                        <div className="Inf_cardChild"><span>配送方式:</span> <span>{ordInfo.delivery}</span></div>
                    </div>

                    <div className="Inf_card">
                        <div className="flexleft bold_font">订单信息</div>
                        <div className="Inf_cardChild"><span style={{width:"60px"}}>订单编号: </span> <span>{ordInfo.id}</span></div>
                        <div className="Inf_cardChild"><span>支付方式: </span> <span>{ordInfo.payment}</span></div>
                        <div className="Inf_cardChild"><span>下单时间: </span> <span>2019-07-07 16:00</span></div>
                        {/* <div className="flexleft">{}</div>
                        <div className="flexleft"> {ordInfo}</div>
                        <div className="flexleft"> </div> */}
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