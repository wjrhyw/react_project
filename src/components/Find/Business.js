import React from 'react';
import {WingBlank,NavBar,Icon,Tabs, Badge,WhiteSpace} from 'antd-mobile';
import '../../assets/font-awesome-4.7.0/css/font-awesome.css';
import '../../assets/css/find/business.css';
import shopicon from '../../assets/img/find/shopicon.jpg'
import reduce from '../../assets/img/find/reduce.png'
import shopcaron from '../../assets/img/find/shopcaron.jpg'
import shopcaroff from '../../assets/img/find/shopcaroff.jpg'
import fivestar from '../../assets/img/find/fivestar.png'
import touxiang from "../../assets/img/find/touxiang.jpg"
import gaifan1 from "../../assets/img/find/gaifan1.jpg";
import Index from "../Index"
import store from "../../index";
//import {GET_ONE_BUSINESS} from '../../action/actionType';
import {connect} from "react-redux";
import businessindex from "../../store/reducers/Find/businessreducers";
import {GET_ALL_FIND} from "../../store/action/actionType";


class BusinessIndex1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            findlist:[],
            total:0,
            el:null,
            num:0
        };
    this.click=this.click.bind(this);
    }
    componentWillMount() {
        Index.hide();
    }
    stepAdd=(index1,index,num,price)=>{
        store.dispatch({
            type:"add_one_num",
            change:{index1,index,num}
        });
        var nowprice=Number(price.slice(2));
        var nowtotal=Number((this.state.total+nowprice).toFixed(2))
        this.setState({
            total:nowtotal,
            num:this.state.num+1
        })


    };
    stepReduce=(index1,index,num,price)=>{
        store.dispatch({
            type:"reduce_one_num",
            change:{index1,index,num}
        })
        var nowprice=Number(price.slice(2));
        if(num<=0){
            return false;
        }else{
            var nowtotal=Number((this.state.total-nowprice).toFixed(2));
        }

        this.setState({
            total:nowtotal,
            num:this.state.num-1
        })
    };
    goSettlement=()=>{
        console.log("这里是结算")
    };

    click(e){
        console.log('被点击的是',e.target.innerHTML);
        this.setState({
            el:e.target.innerHTML
        })
    }
    render(){
        const tabs1 = [
            { title: <Badge>商品</Badge> },
            { title: <Badge>评价</Badge> },
        ];
        const tabs2 = [];
        this.props.list.map((value)=>{
            return(
                tabs2.push({title:value.name})
            )
        })
        return (
            <div style={{height:"100%"}}>
                <NavBar id="shop" mode="dark" icon={<Icon type="left" />} onLeftClick={() => window.history.back(-1)}>店铺</NavBar>
                <div id="header">
                    <div style={{height:"45px"}}></div>
                    <WingBlank>
                        <div className="header_shop">
                            <div style={{width:"23%"}}>
                                <img style={{width:"100%"}} src={shopicon} alt=""/>
                            </div>
                            <div className="header_shop_msg">
                                <div style={{fontSize:"20px"}}>瓜甜果香</div>
                                <div>商家配送/分钟送达/配送费¥5</div>
                                <div>公告:大减价,求求你们来买吧</div>
                            </div>
                            <div className="header_shop_arrow">
                                <Icon type="right" style={{width:"70px",height:"70px"}}/>
                            </div>
                        </div>
                        <div className="header_reduce">
                            <div style={{width:"65%"}}>
                                <img src={reduce} style={{width:"6%"}}/>
                                <span style={{marginLeft:"5px"}}>满30减5,满60减8(APP)专享</span>
                            </div>
                            <div style={{width:"25%",display:"flex",alignItems:"center"}}>
                                <span>一个活动</span>
                                <Icon type="right" />
                            </div>
                        </div>
                    </WingBlank>
                </div>
                <div id="container">
                    <Tabs tabs={tabs1}
                          initialPage={0}
                          onChange={(tab, index) => { console.log('onChange', index, tab); }}
                          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div className="commodity">
                            <Tabs tabs={tabs2}
                                  tabBarPosition="left"
                                  animated={false}
                                  initialPage={0}
                                  tabDirection="vertical"
                            >
                                {
                                    this.props.list.map((value1,index1)=>{
                                        return(
                                            <div key={index1}>
                                                <div className="title">
                                                    <span style={{fontSize:"16px"}}>{value1.name}</span>
                                                    <span style={{color:"#9e9e9e",marginLeft:"5px"}}>{value1.title}</span>
                                                </div>
                                                <WingBlank size="md">
                                                    {
                                                        this.props.list[index1].content.map((value,index)=>{
                                                            return(
                                                                <div className="items" key={index}>
                                                                    <div style={{width:"33%"}}>
                                                                        <img style={{width:"100%",height:"100%"}} src={value.img}/>
                                                                    </div>
                                                                    <div style={{width:"67%",margin:"4px 0 0 5px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                                                        <p style={{fontSize:"16px",fontWeight:"bold"}}>{value.name}</p>
                                                                        <p style={{fontSize:"12px",color:"#9e9e9e"}}>{value.main}</p>
                                                                        <p style={{fontSize:"12px",color:"#9e9e9e"}}>{value.evaluate}</p>
                                                                        <div>
                                                                            <span style={{color:"red",fontSize:"16px"}}>{value.price}</span>
                                                                            <div style={{float:"right"}}>
                                                                                <span className="stepper" onClick={()=>this.stepReduce(index1,index,value.num,value.price)}>-</span>
                                                                                <span className="stepvalue">{value.num}</span>
                                                                                <span className="stepper" onClick={()=>this.stepAdd(index1,index,value.num,value.price)}>+</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </WingBlank>
                                            </div>
                                        )
                                    })
                                }
                            </Tabs>
                        </div>
                        <div className="pingjia">
                            <div className="score">
                                <div style={{width:"25%",color:"#FF5B00",fontSize:"32px"}}>4.6</div>
                                <div style={{width:"23%",textAlign:"left"}}>
                                    <span>商家评分</span>
                                    <img src={fivestar} style={{width:"70%",marginTop:"2%"}} alt=""/>
                                </div>
                                <div style={{width:"16%"}}>
                                    <p>味道</p>
                                    <p style={{fontSize:"20px"}}>4.7</p>
                                </div>
                                <div style={{width:"16%"}}>
                                    <p>包装</p>
                                    <p style={{fontSize:"20px"}}>4.7</p>
                                </div>
                                <div style={{width:"20%",borderLeft:"1px solid #7c7c7c"}}>
                                    <p>配送</p>
                                    <p style={{fontSize:"20px"}}>4.7</p>
                                </div>
                            </div>
                            <div className="classify" onClick={this.click}>
                                {
                                    this.props.list2.map((value,index)=>{
                                        return(
                                            <button key={index} className="classify_btn"  style={this.state.el==value.name+" "+value.num?{background:"#3A95FE",color:"white"}:{}}>{value.name} {value.num}</button>
                                        )
                                    })
                                }
                            </div>
                            <div className="comment">
                                <WingBlank>
                                    <div style={{display:"flex",padding:"20px 0",borderBottom:"1px solid #ddd"}}>
                                        <div style={{width:"12%",marginRight:"3%"}}>
                                            <img src={touxiang} style={{width:"100%",borderRadius:"50px"}} alt=""/>
                                        </div>
                                        <div style={{width:"88%"}}>
                                            <div>
                                                <span>匿名用户</span>
                                                <span style={{float:"right",fontSize:"12px",color:"#7c7c7c"}}>2019-08-31</span>
                                            </div>
                                            <div style={{margin:"5px 0px"}}>
                                                <img src={fivestar} style={{width:"22%"}} alt=""/>
                                                <span style={{marginLeft:"5px",color:"#FF5B00",fontSize:"12px"}}>超赞</span>
                                            </div>
                                            <div>品尝了小米红枣养生粥和银耳红枣羹,真的超级超级好喝,超级超级美味,100000颗星好评!这也太好吃了,我这辈子都没有吃过这么好吃的东西</div>
                                            <div>
                                                <img style={{width:"60%",marginTop:"20px"}} src={gaifan1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </WingBlank>
                            </div>
                        </div>
                    </Tabs>
                </div>
                <div style={{height:"8%"}}> </div>
                <div id="footer" >
                    <div style={{width:"20%",float:"left"}}>
                        <Badge text={this.state.num} style={{display:"inline-block",position:"absolute",top:"-20px",right:"0px"}}>
                            {
                                this.state.num==0?<img src={shopcaroff} className="shopcaricon" alt=""/>:
                                    <img src={shopcaron} className="shopcaricon" alt=""/>
                            }
                        </Badge>
                    </div>
                    <div className="spend">
                        <div style={{fontSize:"17px"}}>¥{this.state.total}</div>
                        <div>配送费¥5</div>
                    </div>
                    {
                        20-this.state.total>0? <div className="sub">还差¥{Number((20-this.state.total).toFixed(2))}起送</div>:
                            <div className="sub" style={{background:"#4BD964"}} onClick={()=>this.goSettlement()}>去结算</div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    //console.log(state.businessindex);
    return {
        list: state.businessindex,
        list2:state.commentreducers
    }
};

let BusinessIndex = connect(mapStateToProps)(BusinessIndex1);
export default BusinessIndex;
