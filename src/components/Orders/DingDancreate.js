import React from 'react';
import '../../assets/css/Orders/orders.css';
import { Icon,Picker,List } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
//import uuidFix from '../../store/reducers/Order/orderreducers';
import Index from '../Index';
import uuid from 'uuid';

var myDate = new Date();

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

  function createTime(){
      let ar1 = [];
      let min = 0;
      let hor = 0;
      for(let i =0;i<48;i++){
        let timeObj ={};
        if(min == 60){
            hor = hor + 1;
            min = 0;
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
            time_now : `(${addZero(myDate.getHours())}`+":"+`${addZero(myDate.getMinutes())})`,
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

    render(){
        const {ordList} = this.props;
        let ordInfo =  ordList[1];
        let discheck1 = ordInfo.discount.manjian_dis;
        let discheck2 = ordInfo.discount.hongbao_dis;


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
                               <span>实付￥</span> 
                        </div>
                    </div>

                    <div className="Inf_card">
                        <div className="flexleft bold_font">配送信息</div>
                        <div className="Inf_cardChild"><span className="cardChild_left">电话:</span> <span className="cardChild_right">{ordInfo.tel}</span></div>
                        <div className="Inf_cardChild"><span className="cardChild_left">配送方式:</span> <span className="cardChild_right">{ordInfo.delivery.deliver_way}</span></div>
                    </div>

                    <div className="Inf_card">
                        <div className="flexleft bold_font">订单信息</div>
                        <div className="Inf_cardChild"><span style={{flexShrink:'0',width:'61px'}}>订单备注: </span> <span className="cardChild_right" style={{flexGrow:'0'}}></span><span><Icon type="right" /></span></div>
                        <div className="Inf_cardChild"><span className="cardChild_left">支付方式: </span> <span className="cardChild_right">{ordInfo.payment}</span></div>
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
                </div>)
    }
}

export default DingDancreate;