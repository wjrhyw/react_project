import React from 'react';
import '../../assets/css/takeout/zonghe.css'
class Zonghe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display:'none',
            show:''
        }
        Zonghe.show=this.show.bind(this);
        Zonghe.hide=this.hide.bind(this);
    }
    //暴露方法
    show(text){
        this.setState({
            display:'block',
            text
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
                {
                    this.state.text=='综'
                    ?<ul className='ul_zonghe'>
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
                    :<ul className='ul_zonghe_2' style={{width:'100%',color:'#5F5F61'}}>
                        <li>
                            <p className='title'>商家服务(可多选)</p>
                            <div className='flex_div' style={{color:'#313131'}}>
                                <p className='item'>
                                    <img src={require('../../assets/img/song.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    蜂鸟转送
                                </p>
                                <p className='item'>
                                    <img src={require('../../assets/img/dian.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    到店自取
                                </p>
                                <p className='item'>
                                    <img src={require('../../assets/img/men.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    品牌商家
                                </p>
                                <p className='item'>
                                    <img src={require('../../assets/img/xin.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    新店
                                </p>
                                <p className='item'>
                                    <img src={require('../../assets/img/bao.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    食保安
                                </p>
                                <p className='item'>
                                    <img src={require('../../assets/img/piao.png')} style={{marginRight:'5px',height:'11px'}}/>                                    
                                    开发票
                                </p>
                            </div>
                        </li>
                        <li>
                            <p className='title'>优惠活动(单选)</p>
                            <div className='flex_div' style={{color:'#313131'}}>
                                <p className='item'>收单立减</p>
                                <p className='item'>门店新客立减</p>
                                <p className='item'>满减优惠</p>
                                <p className='item'>下单返红包</p>
                                <p className='item'>进店领红包</p>
                                <p className='item'>配送费优惠</p>
                            </div>
                        </li>
                        <li>
                            <p className='title'>人均消费</p>
                            <div className='flex_div' style={{color:'#313131'}}>
                                <p className='item'>￥20以下</p>
                                <p className='item'>￥20-￥40</p>
                                <p className='item'>￥40-￥60</p>
                                <p className='item'>￥60-￥80</p>
                                <p className='item'>￥80-￥100</p>
                                <p className='item'>￥100以上</p>
                            </div>
                        </li>
                        <li style={{textAlign:'center',}}>
                            <div style={{display:'inline-block',width:'50%',height:'45px',lineHeight:'45px'}}>清空</div>
                            <div style={{color:'#fff',display:'inline-block',width:'50%',height:'45px',backgroundColor:'#02D663',lineHeight:'45px'}}>确定</div>
                        </li>
                    </ul>
                }
            </div>
        )
    }
}
export default Zonghe