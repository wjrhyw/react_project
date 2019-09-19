import React from 'react';
import { Icon } from 'antd';
class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            color:this.props.color?this.props.color:'blue',
            height:this.props.height?this.props.height:'120px',
            width:this.props.width?this.props.width:'120px',
            fontSize:this.props.fontSize?this.props.fontSize:'40px',
            top:`${document.body.clientHeight/2}px`,
            title:this.props.title?this.props.title:'正在加载'
        };
        Loading.show=Loading.show.bind(this);
        Loading.hide=Loading.hide.bind(this);
    }
    render(){
        return (
            <div  style={{borderRadius:'10px',width:this.state.width,height:this.state.height,margin:'0 auto',display:this.state.visible?'block':'none',position:'fixed',top:`${parseInt(this.state.top)-parseInt(this.state.height)/2}px`,right:' 0',bottom:'0',left:'0',zIndex:'10000000',outline:'0',backgroundColor:'rgba(0, 0, 0, 0.65)'}}>
                <Icon type='loading' style={{color:this.state.color,fontSize:this.state.fontSize,lineHeight:this.state.height,height:this.state.fontSize}}/>
                <p style={{color:'#fff',marginTop:'10px'}}>{this.state.title}</p>
            </div>
        )
    }
    //暴露接口来控制loading组件的隐藏或者显示
    static show(){
        this.setState({
            visible:true
        });
    }
    static hide(){
        this.setState({
            visible:false
        });
    }

}

export default Loading