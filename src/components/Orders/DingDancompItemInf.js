import React from 'react';
import '../../assets/css/Orders/orders.css';
import { Icon } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import uuid from 'uuid';
import Index from '../Index';
import { red } from 'ansi-colors';

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
        // console.log(this.props);
        // return <div>orders</div>
        let {id} = this.props.match.params;
        const {ordList} = this.props;
        let ordInfo =  ordList.find((item)=>{
            return item.id === id;
        });
       
        let discheck1 = ordInfo.discount.manjian_dis;
        let discheck2 = ordInfo.discount.hongbao_dis;

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
                                <span className="float_foodname span_font_mid" key = {key}>{`${item.foodname} x ${item.foodnum}`}</span>
                                <span style={{fontSize:"14px"}} className="span_font_mid bold_font">￥{item.foodprice}</span>
                            </div>)
                            )
                            }
                        </div>
                        <div className="food_item">
                                <span className="minicard" style={{backgroundColor: 'rgb(63, 136, 231)',color:"rgb(247, 242, 242)"}}>配送费</span>
                                <span className="float_foodname span_font_mid">{ordInfo.delivery.deliver_way}</span>
                                <span style={{fontSize:"14px"}} className="span_font_mid bold_font">￥{ordInfo.delivery.deliver_price}</span>
                        </div>
                        {(JSON.stringify(discheck1) != "{}")&&(
                        <div className="food_item">
                                <span className="minicard" style={{backgroundColor: 'rgb(235, 120, 53, 0.849)',color:"rgb(247, 242, 242)"}}>满减</span>
                                <span className="float_foodname span_font_mid">{ordInfo.discount.manjian_dis.discount_way}</span>
                                <span style={{fontSize:"14px"}} className="span_font_mid bold_font">￥{ordInfo.discount.manjian_dis.discount_val}</span>
                        </div>)
                        }

                        {(JSON.stringify(discheck2) != "{}")&&(
                        <div className="food_item">
                                <span className="minicard" style={{backgroundColor: 'rgb(235, 120, 53, 0.849)',color:"rgb(247, 242, 242)"}}>红包</span>
                                <span className="float_foodname span_font_mid">{discheck2.discount_way}</span>
                                <span style={{fontSize:"14px"}} className="span_font_mid bold_font">￥{discheck2.discount_val}</span>
                        </div>)
                        }

                        <div className="food_item">
                               <span>实付￥{ordInfo.totalCost}</span> 
                        </div>


                    </div>

                    <div className="Inf_card">
                        <div className="flexleft bold_font">配送信息</div>
                        <div className="Inf_cardChild"><span>电话:</span> <span className="cardChild_right">{ordInfo.tel}</span></div>
                        <div className="Inf_cardChild"><span>配送方式:</span> <span className="cardChild_right">{ordInfo.delivery.deliver_way}</span></div>
                    </div>

                    <div className="Inf_card">
                        <div className="flexleft bold_font">订单信息</div>
                        <div className="Inf_cardChild"><span style={{flexShrink:'0',width:'61px'}}>订单编号: </span> <span className="cardChild_right" style={{flexGrow:'0'}}>{ordInfo.id}</span></div>
                        <div className="Inf_cardChild"><span>支付方式: </span> <span className="cardChild_right">{ordInfo.payment}</span></div>
                        <div className="Inf_cardChild"><span>下单时间: </span> <span className="cardChild_right">{ordInfo.createTime}</span></div>
                        {/* <div className="flexleft">{}</div>
                        <div className="flexleft"> {ordInfo}</div>
                        <div className="flexleft"> </div> */}
                    </div>
                </div>)
    }
}

export default DingDancompItemInf;