import React,{Component} from 'react';
import {NavBar,Icon,Flex, WhiteSpace} from 'antd-mobile';
import '../../assets/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../assets/css/Mefile/Mefile.css';

class MeFile extends Component {
    state = {
        username:"登录/注册",
        mobile:"暂无绑定手机"
    }
    render(){
        
        return(
            <div className="body">
                <Flex>
                    <Flex.Item flex="2" >
                        <NavBar mode="dark" icon={<Icon type="left"/>}>我的</NavBar>
                    </Flex.Item>
                </Flex>
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
                            <NavBar style={{margin:"0",padding:"0",float:"right"}} icon={<Icon type="right"/>}/>
                        </div>  
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item className="flex-size" flex="2">
                         <span className="data-top"><b>0</b>元</span>
                         <span className="data-bottom">我的余额</span>
                    </Flex.Item>
                    <Flex.Item className="flex-size" flex="2">
                        <span className="data-top"><b>0</b>个</span>
                        <span className="data-bottom">我的优惠</span>
                    </Flex.Item>
                    <Flex.Item className="flex-size" flex="2">
                        <span className="data-top"><b>0</b>分</span> 
                        <span className="data-bottom">我的积分</span>
                    </Flex.Item>
                </Flex>
                <WhiteSpace style={{background:"white"}}/>
                <Flex>
                    <Flex.Item>
                       <ul className="other">
                           <li className="other-one">
                                <i className="fa fa-file-text-o"></i>
                                我的订单
                                <i className="fa fa-angle-right"></i>
                            </li>
                           <li className="other-one">
                                <i className="fa fa-file-text-o"></i>
                                积分商城
                                <i className="fa fa-angle-right"></i>
                            </li>
                           <li className="other-one">
                                <i className="fa fa-file-text-o"></i>
                                饿了么会员卡
                                <i className="fa fa-angle-right"></i>
                            </li>
                           <li className="other-one">
                                <i className="fa fa-file-text-o"></i>
                                服务中心
                                <i className="fa fa-angle-right"></i>
                            </li>
                           <li className="other-one">
                                <i className="fa fa-file-text-o"></i>
                                下载饿了么APP
                                <i className="fa fa-angle-right"></i>
                            </li>
                       </ul>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
export default MeFile;