//会员卡
import React from 'react';
import {NavBar,Icon} from "antd-mobile";

class MemberCard extends React.Component{
    render(){
        const item = ['md'];
        return(
            <div>
                <NavBar mode="dark" onLeftClick={()=>{console.log("back")}} icon={<Icon type="left" size={item}/>}>会员中心</NavBar>
            </div>
        )
    }
}
export default MemberCard;