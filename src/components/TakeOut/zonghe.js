import React from 'react';
import '../../assets/css/takeout/zonghe.css'
class Zonghe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display:'none'
        }
        Zonghe.show=this.show.bind(this);
        Zonghe.hide=this.hide.bind(this);
    }
    //暴露方法
    show(){
        this.setState({
            display:'block'
        })
    }
    hide(){
        console.log('隐藏方法被调用');
        this.setState({
            display:'none'
        },()=>{
            console.log('隐藏方法执行完毕');
        })
    }
    render(){
        return (
            <div className='zonghe_div' style={this.state.display=='none'?{display:'none'}:{display:'block'}}>
                {/* <div style={{height:'45px'}}></div> */}
                <ul className='ul_zonghe'>
                    <li>综合排序</li>
                    <li>好评优先</li>
                    <li>销量最高</li>
                    <li>起送价最高</li>
                    <li>配送最快</li>
                    <li>配送费最低</li>
                    <li>人均从低到高</li>
                    <li>人均从高到低</li>
                    <li>通用排序</li>
                </ul>
            </div>
        )
    }
}
export default Zonghe