import React from 'react';
import {WingBlank,NavBar,Icon,Tabs, Badge,WhiteSpace, List, Stepper } from 'antd-mobile';
import '../../assets/font-awesome-4.7.0/css/font-awesome.css';
import '../../assets/css/find/business.css';
import shopicon from '../../assets/img/find/shopicon.jpg'
import reduce from '../../assets/img/find/reduce.png'
import hanbb from '../../assets/img/find/hanbb.jpg'
import Index from "../Index"
class FindIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            findlist:[],
            val: 3,
            val1: 2,
        }
    }
    render(){
        
        const tabs1 = [
            { title: <Badge>商品</Badge> },
            { title: <Badge>评价</Badge> },
        ];
        const tabs2 = [
            { title: "热销榜", sub: '1' },
            { title: '优惠',sub: '2' },
            { title: '营养肉粥', sub: '3' },
            { title: '特色点心', key: 't4' },
            { title: '蛮灵甜粥', key: 't5' },
            { title: '全素粥类', key: 't6' },
            { title: '海鲜粥类', key: 't7' },
        ];
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
                                  initialPage={0}
                                  tabBarPosition="left"
                                  animated={false}
                            >
                                <div>

                                        <div className="title">
                                            <span style={{fontSize:"16px"}}>热销榜</span>
                                            <span style={{color:"#9e9e9e",marginLeft:"5px"}}>大家都喜欢吃,才叫真好吃</span>
                                        </div>
                                        <WingBlank>
                                            <div className="item">
                                                <div style={{width:"35%"}}>
                                                    <img style={{width:"100%"}} src={hanbb}/>
                                                </div>
                                                <div style={{width:"65%"}}>
                                                    <p>冰镇黄桃</p>
                                                    <p>主要原料: 黄桃</p>
                                                    <p>月售206份 好评率100%</p>
                                                    <div>
                                                        <span>¥9</span>
                                                        <div>
                                                            <List>
                                                                <List.Item
                                                                    wrap
                                                                    extra={
                                                                        <Stepper
                                                                            style={{ width: '100%', minWidth: '100px' }}
                                                                            showNumber
                                                                            max={10}
                                                                            min={1}
                                                                            value={this.state.val}
                                                                            onChange={this.onChange}
                                                                        />}
                                                                >
                                                                </List.Item>
                                                            </List>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </WingBlank>
                                </div>
                                <div style={{  height: '50px', backgroundColor: 'green' }}>
                                    43423
                                </div>
                                <div style={{ height: '50px', backgroundColor: 'yellow' }}>
                                   4324
                                </div>
                            </Tabs>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: 'red' }}>
                            这是第二个模块
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default FindIndex;
