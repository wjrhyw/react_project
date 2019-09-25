import React from 'react';
import { Icon } from 'antd-mobile';
import 'antd/es/icon/style/index.js'
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
        Loading.show=this.show.bind(this);
        Loading.hide=this.hide.bind(this);
    }
        //暴露接口来控制loading组件的隐藏或者显示
         show=(title)=>{
            console.log('被执行,被执行',this.state.visible,'this对象是',this.state);
            this.setState({
                visible:true,
                title:title?title:'正在加载'
            },()=>{
                console.log('成功被执行');
            });
        }
         hide=()=>{
            console.log('关闭关闭',this.state.visible,'this对象是',this.state);
            this.setState({
                visible:false
            },()=>{
                console.log('结束被执行');
            });
        }
    render(){
        return (
            <div  style={{borderRadius:'10px',width:this.state.width,height:this.state.height,margin:'0 auto',display:this.state.visible?'block':'none',position:'fixed',top:`${parseInt(this.state.top)-parseInt(this.state.height)/2}px`,right:' 0',bottom:'0',left:'0',zIndex:'10000000',outline:'0',backgroundColor:'rgba(0, 0, 0, 0.65)'}}>
                <Icon type='loading' size='lg' style={{color:this.state.color,marginTop:`${parseInt(this.state.height)/2-40}px`,height:this.state.fontSize}}/>
                <p style={{color:'#fff',marginTop:'10px'}}>{this.state.title}</p>
            </div>
        )
    }
    componentWillUnmount(){
        this.setState = (state, callback) => {
            return
        }
    }

}

export default Loading
