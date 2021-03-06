import React from 'react';
import '../../assets/css/Orders/orders.css';
import '../../assets/css/Orders/dingdancreate.css'
import { Icon,Picker,List,Button } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
//import uuidFix from '../../store/reducers/Order/orderreducers';
import Index from '../Index';
import uuid from 'uuid';
import {uuidFix} from '../../store/reducers/Order/orderreducers'
import {connect} from 'react-redux';
import {AddItemAction} from '../../store/action/actionCreator';
import {orderlist} from '../Find/Business'

var newOrd;

var myDate = new Date();
console.log(orderlist);
const place = {name:"hxj",adress:"崧文苑15栋",phone1:"13988845678"}

const datelist = [
    [
      {
        label: '今天',
        value: 'today',
      },
      {
        label: '明天',
        value: 'tomorrow',
      },
    ],
  ];

  const canjulist = [
      {
        label: '1份',
        value: 1,
      },
      {
        label: '2份',
        value: 2,
      }
  ];

  function addZero(num) {
    if (num < 10) {
      num = '0' + num
    }
    return num;
  }

  export function getNowFormatDate() {
    let seperator1 = "-";
    let year = myDate.getFullYear();
    let month = myDate.getMonth() + 1;
    let strDate = myDate.getDate();
    let mins = myDate.getMinutes();
    let hours = myDate.getHours();
    let min = addZero(mins);
    let hour = addZero(hours);
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate + " "+ hour + ":" + min;
    return currentdate;
  }

  function createTime(){
      let ar1 = [];
      let min = 0;
      let hor = 0;
      for(let i =0;i<48;i++){
        let timeObj ={};
        if(min >= 60){
            hor = hor + 1;
            min = 0;
        }
        if(myDate.getHours() == hor)
        {
          hor = myDate.getHours();
          if(myDate.getMinutes()<30){
            min= myDate.getMinutes() +30;
          }
          else if(myDate.getMinutes() >= 30){
           min= myDate.getMinutes()-30;
           hor = hor + 1;
          }
        }
        if(hor>=24){
          break;
        }
        let hors = addZero(hor);
        let mins = addZero(min);
        
        timeObj.label = `${hors}`+ ":" +`${mins}`;
        timeObj.value = `${hors}`+ ":" +`${mins}`;
        ar1.push(timeObj);
        min = min + 30;
      }
      datelist.push(ar1);
      return ar1;
  }


  createTime();

class DingDancreate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sValue: [],
            canjuValue:[],
            time_now : `(${addZero(myDate.getMinutes()>=30?myDate.getHours()+1:myDate.getHours())}`+":"+`${addZero(myDate.getMinutes()>=30?myDate.getMinutes()-30:myDate.getMinutes()+30)})`,
            canju:1
          };
    }

    componentDidMount(){
        Index.hide();
    }

    backNavRender(){
        window.history.back(-1);
        Index.show();
    }

    calcprice(){
      let ordInfo = newOrd;
      let fod_price= 0;
      let fod_price_fix1 = 0;
      let mjdis = 0;
      let hbdis = 0;
      let manjian_disck = ordInfo.discount.manjian_dis;
      let hongbao_disck = ordInfo.discount.hongbao_dis;
      let delivery = ordInfo.delivery;

      ordInfo.foods.forEach(element => {
          fod_price = fod_price + (element.foodprice*element.foodnum);
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
      newOrd.totalCost = fod_price_fix;
      return fod_price_fix;
    }

    priceFix(price){
      let reg = new RegExp("¥","g");
      let a = price.replace(reg,"");
      let fixprice = parseFloat(a);
      return fixprice;
    }

    createNewOrder(){
      this.props.addTodo(newOrd);
      this.backNavRender();
    }

    addNewOrder(){
      let objfood =[];
      orderlist.map((item,key)=>{
        let orderobj = {};
        if(key != 0){
          orderobj.foodname= item.name;
          orderobj.foodprice= this.priceFix(item.price);
          orderobj.foodnum= item.num;
          objfood.push(orderobj);
        }
      })
      const {ordList} = this.props;
      //const {addTodo} = this.props;
      let ordInfo =  ordList[1];
      newOrd =  {id:uuidFix(),delivery:ordInfo.delivery,payment:ordInfo.payment, shopname:ordInfo.shopname, foods:objfood, tel:ordInfo.tel,discount:ordInfo.discount,status: ordInfo.status,createTime:getNowFormatDate()};
      console.log("this is create",newOrd);
    }

    render(){
      this.addNewOrder();
        const {ordList} = this.props;
        let ordInfos =  newOrd;
        let discheck1 = ordInfos.discount.manjian_dis;
        let discheck2 = ordInfos.discount.hongbao_dis;


        return (<div id = 'ItemInfDad'>
                    <div id="back_btn" onClick={()=>{this.backNavRender()}}><Icon type="left" /></div>
                    <div className="Inf_card" style={{backgroundColor:"transparent",margin:"0px 15px"}}>
                      <div className="adressDiv flexleft">{place.adress}</div>
                      <div className="flexleft"><span>{place.name}</span><span>{place.phone1}</span></div>
                    </div>
                 
                    <div className="Inf_card">
                        <Picker
                        data={datelist}
                        title="选择送达时间"
                        cascade={false}
                        extra={"尽快送达"+this.state.time_now}
                        value={this.state.sValue}
                        onChange={v => this.setState({ sValue: v })}
                        onOk={v => this.setState({ sValue: v })}
                        >
                            <List.Item arrow="horizontal">送达时间</List.Item>
                        </Picker>
                    </div>
                    <div className="Inf_card">
                        <div className="flexleft bold_font">{ordInfos.shopname}</div>
                        <div style={{textAlign:"left"}}>{ordInfos.foods.map((item,key)=>(
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
                                <span className="float_foodname span_font_mid">{ordInfos.delivery.deliver_way}</span>
                                <span style={{fontSize:"14px"}} className="span_font_mid bold_font">￥{ordInfos.delivery.deliver_price}</span>
                        </div>
                        {(JSON.stringify(discheck1) != "{}")&&(
                        <div className="food_item">
                                <span className="minicard" style={{backgroundColor: 'rgb(235, 120, 53, 0.849)',color:"rgb(247, 242, 242)"}}>满减</span>
                                <span className="float_foodname span_font_mid">{ordInfos.discount.manjian_dis.discount_way}</span>
                                <span style={{fontSize:"14px"}} className="span_font_mid bold_font">￥{ordInfos.discount.manjian_dis.discount_val}</span>
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
                               <span style={{marginLeft:'auto'}}>小计￥<span style={{fontWeight:'bold'}}>{(()=>this.calcprice())()}</span><span className="cancelflot"></span></span> 
                        </div>
                    </div>

                    <div className="Inf_card">
                        <div className="flexleft bold_font">配送信息</div>
                        <div className="Inf_cardChild"><span className="cardChild_left">电话:</span> <span className="cardChild_right">{ordInfos.tel}</span></div>
                        <div className="Inf_cardChild"><span className="cardChild_left">配送方式:</span> <span className="cardChild_right">{ordInfos.delivery.deliver_way}</span></div>
                    </div>

                    <div className="Inf_card">
                        <div className="Inf_cardChild"><span style={{flexShrink:'0',width:'61px'}}>订单备注: </span> <span className="cardChild_right" style={{flexGrow:'0'}}></span><span><Icon type="right" /></span></div>
                        <div className="Inf_cardChild"><span className="cardChild_left">支付方式: </span> <span className="cardChild_right">{ordInfos.payment}</span></div>
                        <div className="Inf_cardChild"> 
                          <Picker
                          data={canjulist}
                          title="餐具份数"
                          cols={1} 
                          extra={"餐具份数"+this.state.canju}
                          value={this.state.canjuValue}
                          onChange={v => this.setState({ canjuValue: v })}
                          onOk={v => this.setState({ canjuValue: v })}
                          >
                              <List.Item arrow="horizontal">餐具份数:</List.Item>
                          </Picker> 
                        </div>
                    </div>
                    <div className="b2ottom_bar">
                      <span style={{float:'left',lineHeight:'60px',paddingLeft:'10px',fontWeight:'bold'}}>￥{(()=>this.calcprice())()}</span>
                      <button onClick={()=>{this.createNewOrder()}} className="createBtn">去结算</button>
                      {/* <button className="createBtn">去结算</button> */}
                    </div>
                </div>)
    }
}

const mapDispatchToProps = (dispatch)=>{
  return {
      addTodo(ordinfs){
          const action = AddItemAction(ordinfs);
          dispatch(action);
      }
  }
};

export default  connect(null, mapDispatchToProps)(DingDancreate);
//export default DingDancreate;