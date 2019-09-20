//服务中心
import React from 'react';
import {NavBar,Icon,Flex,List} from "antd-mobile";
import '../../assets/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../assets/css/Mefile/ServiceCentre.css';

class ServiceCentre extends React.Component{
    render(){
        const item = ['md'];
        
        return(
            <div style={{height:"auto",backgroundColor:"white"}}>
                <NavBar mode="dark" style={{width:"100%",position:"fixed",top:"0",left:"0"}} onLeftClick={()=>{console.log("back")}} icon={<Icon type="left" size={item}/>}>服务中心</NavBar>
                <Flex style={{marginTop:"45px",width:"100%"}}>
                    <Flex.Item className="centerStyle">
                        <span><i className="fa fa-user-circle fa-lg" style={{color:"#ff6600"}}></i></span><br/>
                        <span>客服中心</span>
                    </Flex.Item>
                    <Flex.Item className="centerStyle">
                        <span><i className="fa fa-phone" style={{color:"green"}}></i></span><br/>
                        <span>服务电话</span>
                    </Flex.Item>
                </Flex>
                
                <Flex style={{width:"100%",overflow:"hidden"}}>
                    <Flex.Item>
                       <ul>
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="hot">
                                    热门问题
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    超级会员权益说明
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    签到规则
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    用户等级说明
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    积分问题
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    支付问题
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    会员说明
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    超级会员权益说明
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    签到规则
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    用户等级说明
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    积分问题
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    支付问题
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                            {/* <NavLink to="/MeFile/MyOrder"> */}
                                <li className="other-one">
                                    会员说明
                                    <i className="fa fa-angle-right"></i>
                                </li>
                            {/* </NavLink> */}
                        </ul>
                    </Flex.Item>
                </Flex>
                   
                   
            </div>
        )
    }
}
export default ServiceCentre;