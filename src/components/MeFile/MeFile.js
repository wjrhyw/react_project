import React,{Component} from 'react';
import {NavBar,Icon,Flex, WhiteSpace} from 'antd-mobile';
import '../../assets/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../assets/css/Mefile/Mefile.css';

import {NavLink} from 'react-router-dom';



class MeFile extends Component {
    state = {
        username:"登录/注册",
        mobile:"暂无绑定手机"
    }
    render(){
        const item = ['md'];
        return(
            <div className="body">
                <Flex>
                    <Flex.Item flex="2" >
                        <NavBar mode="dark" icon={<Icon type="left" size={item}/>}>我的</NavBar>
                    </Flex.Item>
                </Flex>
            <NavLink to="/MeFile/Login">
                <Flex className="user">
                    <Flex.Item>
                        <div>
                            <img alt="img is wrong" src={require('../../assets/img/favicon.ico')}/>
                        </div>
                    </Flex.Item>
                    <Flex.Item flex="2">
                        <div>
                            <div className="user-login">
                                {this.state.username}
                            </div>
                            <div className="user-bind">
                                {this.state.mobile}
                            </div>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className="container-icon">
                            <NavBar style={{margin:"0",padding:"0",float:"right",fontSize:"12px"}} icon={<Icon type="right"/>}/>
                        </div>  
                    </Flex.Item>
                </Flex>
            </NavLink>
                <Flex>
                    <Flex.Item className="flex-size" flex="2">
                        <span className="data-top">
                             <b style={{color:"#f90",fontSize:"27px"}}>0.00</b>元
                        </span>
                         <div className="data-bottom">我的余额</div>
                    </Flex.Item>
                    <Flex.Item className="flex-size" flex="2">
                        <span className="data-top">
                            <b style={{color:"#ff5f3e",fontSize:"27px"}}>0</b>个
                        </span>
                        <div className="data-bottom">我的优惠</div>
                    </Flex.Item>
                    <Flex.Item className="flex-size" flex="2">
                        <span className="data-top">
                            <b style={{color:"#6ac20b",fontSize:"27px"}}>0</b>分
                        </span> 
                        <div className="data-bottom">我的积分</div>
                    </Flex.Item>
                </Flex>
                <WhiteSpace style={{background:"white"}}/>
                <Flex>
                    <Flex.Item>
                       <ul className="other">
                       <NavLink to="/MeFile/MyOrder">
                           <li className="other-one">
                                <i className="fa fa-file-text-o" style={{marginRight:"10px"}}></i>
                                我的订单
                                <i className="fa fa-angle-right"></i>
                            </li>
                        </NavLink>
                        <NavLink to="/MeFile/Mall">
                           <li className="other-one">
                                <i className="fa fa-navicon" style={{marginRight:"10px",color:"#ff99cc"}}></i>
                                我的地址
                                <i className="fa fa-angle-right"></i>
                            </li>
                        </NavLink>
                        <NavLink to="/MeFile/MemberCard">
                           <li className="other-one">
                                <i className="fa fa-diamond" style={{marginRight:"10px",color:"#ffff66"}}></i>
                                我的收藏
                                <i className="fa fa-angle-right"></i>
                            </li>
                        </NavLink>
                        <NavLink to="/MeFile/ServiceCentre">
                           <li className="other-one">
                                <i className="fa fa-square" style={{marginRight:"10px",color:"#6666ff"}}></i>
                                我的客服
                                <i className="fa fa-angle-right"></i>
                            </li>
                        </NavLink>
                        <NavLink to="/MeFile/Download">
                           <li className="other-one">
                                <i className="fa fa-arrow-down" style={{marginRight:"10px",color:"green"}}></i>
                                下载饿了么APP
                                <i className="fa fa-angle-right"></i>
                            </li>
                        </NavLink>
                       </ul>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
 export default MeFile;