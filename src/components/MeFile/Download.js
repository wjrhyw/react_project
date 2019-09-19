//下载APP
import React from 'react';
import {NavBar,Icon,Button} from "antd-mobile";

class Download extends React.Component{
    render(){
        const item = ['md'];
        let imgStyle ={
            width:"100px", 
            height:"100px",
            marginTop:"25px",
            marginBottom:"20px"
        }
        return(
            <div>
                <NavBar mode="dark" onLeftClick={()=>{console.log("back")}} icon={<Icon type="left" size={item}/>}>下载</NavBar>
                <div>
                    <img alt="img is wrong" style={imgStyle}  src={require('../../assets/img/favicon.ico')}/>
                </div>
                <Button type="primary" style={{backgroundColor:"#00cc00",margin:"5px 10px 0 10px",fontWeight:"bold"}}>下载APP</Button>
            </div>
        )
    }
}
export default Download;