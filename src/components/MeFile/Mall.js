//积分商城
import React from 'react';
import {NavBar,Icon} from "antd-mobile";

class Mall extends React.Component{
    render(){
        const item = ['md'];
        return(
            <div>
                <NavBar mode="dark" onLeftClick={()=>{console.log("back")}} icon={<Icon type="left" size={item}/>}>积分商城</NavBar>
            </div>
        )
    }
}
export default Mall;