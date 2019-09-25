import React from 'react';
import '../../assets/css/takeout/zonghe.css'
class Zonghe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display:'none',
            show:'',
            active_sf:[],
            active_yh:'',
            active_xf:'',
            select:'综合排序'
        }
        Zonghe.show=this.show.bind(this);
        Zonghe.hide=this.hide.bind(this);
        this.click=this.click.bind(this);
        this.click2=this.click2.bind(this);
        this.s=this.s.bind(this);
        this.ss=this.ss.bind(this);
        this.sss=this.sss.bind(this);
        this.clear=this.clear.bind(this);
        this.submit=this.submit.bind(this);
        this.ssss=this.ssss.bind(this);
    }
    //返回样式方法
    s(text){
       return (this.state.active_sf.some((val)=>{
            return val==text
         })?{backgroundColor:'#EBF5FE',color:'#4E9AD5'}:{})
    }
    ss(text){
        if(this.state.active_yh==text){
            return {
                backgroundColor:'#EBF5FE',color:'#4E9AD5'
            }
        }
    }
    sss(text){
        if(this.state.active_xf==text){
            return {
                backgroundColor:'#EBF5FE',color:'#4E9AD5'
            }
        }
    }
    ssss(text){
        if(this.state.select==text){
            return {
                color:'#4C87A9'
            }
        }
    }
    //暴露方法
    show(text){
        this.setState({
            display:'block',
            show:text
        })
    }
    hide(){
        this.setState({
            display:'none'
        })
    }
    //绑定方法
    click(e){
        if(e.target.className=='ul_zonghe'){
            return 
        }
        this.setState({
            select:e.target.innerHTML
        })
        this.props.zclick(e.target.innerHTML);
    }
    click2(e){
        if(e.target.id=='sf'||e.target.id=='yh'||e.target.id=='xf'){
            return
        }
        var id=e.target.parentElement.id;
        if(id=='sf'){
            if(this.state.active_sf.find((val)=>{
                return val==e.target.id
            })){
                var index=this.state.active_sf.findIndex((val)=>{return  val==e.target.id});
                var arr=this.state.active_sf;
                arr.splice(index);
                this.setState({
                    active_sf:arr
                })
            }else{
                var arr=this.state.active_sf;
                arr.push(e.target.id);
                this.setState({
                    active_sf:arr
                });
            }
        }else if(id=='yh'){
            this.setState({
                active_yh:e.target.innerHTML
            });
        }else{
            this.setState({
                active_xf:e.target.innerHTML
            });
        }
    }
    clear(){
        this.setState({
            active_sf:[],
            active_yh:'',
            active_xf:''
        });
    }
    submit(){
        this.setState({
            active_sf:[],
            active_yh:'',
            active_xf:''
        });
        this.props.zclick1();
    }
    render(){
        return (
            <div className='zonghe_div' style={this.state.display=='none'?{display:'none'}:{display:'block'}}>
                {
                    this.state.show!='筛'
                    ?<ul className='ul_zonghe' onClick={this.click}>
                        <li style={this.ssss('综合排序')}>综合排序</li>
                        <li style={this.ssss('好评优先')}>好评优先</li>
                        <li style={this.ssss('销量最高')}>销量最高</li>
                        <li style={this.ssss('起送价最高')}>起送价最高</li>
                        <li style={this.ssss('配送最快')}>配送最快</li>
                        <li style={this.ssss('配送费最低')}>配送费最低</li>
                        <li style={this.ssss('人均从低到高')}>人均从低到高</li>
                        <li style={this.ssss('人均从高到低')}>人均从高到低</li>
                        <li style={this.ssss('通用排序')}>通用排序</li>
                    </ul>
                    :<ul className='ul_zonghe_2' style={{width:'100%',color:'#5F5F61'}} onClick={this.click2}>
                        <li>
                            <p className='title'>商家服务(可多选)</p>
                            <div className='flex_div' id='sf' style={{color:'#313131'}}>
                                <p className='item' id='蜂鸟专送' style={this.s('蜂鸟专送')}>
                                    <img src={require('../../assets/img/song.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    蜂鸟专送
                                </p>
                                <p className='item' id='到店自取' style={this.s('到店自取')}>
                                    <img src={require('../../assets/img/dian.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    到店自取
                                </p>
                                <p className='item' id='品牌商家' style={this.s('品牌商家')}>
                                    <img src={require('../../assets/img/men.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    品牌商家
                                </p>
                                <p className='item' id='新店' style={this.s('新店')}>
                                    <img src={require('../../assets/img/xin.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    新店
                                </p>
                                <p className='item'  id='食保安' style={this.s('食保安')}>
                                    <img src={require('../../assets/img/bao.png')} style={{marginRight:'5px',height:'11px'}}/>
                                    食保安
                                </p>
                                <p className='item' id='开发票' style={this.s('开发票')}>
                                    <img src={require('../../assets/img/piao.png')} style={{marginRight:'5px',height:'11px'}}/>                                    
                                    开发票
                                </p>
                            </div>
                        </li>
                        <li>
                            <p className='title'>优惠活动(单选)</p>
                            <div className='flex_div' id='yh' style={{color:'#313131'}}>
                                <p className='item' style={this.ss('收单立减')}>收单立减</p>
                                <p className='item' style={this.ss('门店新客立减')}>门店新客立减</p>
                                <p className='item' style={this.ss('满减优惠')}>满减优惠</p>
                                <p className='item' style={this.ss('下单返红包')}>下单返红包</p>
                                <p className='item' style={this.ss('进店领红包')}>进店领红包</p>
                                <p className='item' style={this.ss('配送费优惠')}>配送费优惠</p>
                            </div>
                        </li>
                        <li>
                            <p className='title'>人均消费</p>
                            <div className='flex_div' id='xf' style={{color:'#313131'}}>
                                <p className='item' style={this.sss('￥20以下')}>￥20以下</p>
                                <p className='item' style={this.sss('￥20-￥40')}>￥20-￥40</p>
                                <p className='item' style={this.sss('￥40-￥60')}>￥40-￥60</p>
                                <p className='item' style={this.sss('￥60-￥80')}>￥60-￥80</p>
                                <p className='item' style={this.sss('￥80-￥100')}>￥80-￥100</p>
                                <p className='item' style={this.sss('￥100以上')}>￥100以上</p>
                            </div>
                        </li>
                        <li style={{textAlign:'center',}}>
                            <div onClick={this.clear} style={{display:'inline-block',width:'50%',height:'45px',lineHeight:'45px'}}>清空</div>
                            <div onClick={this.submit} style={{color:'#fff',display:'inline-block',width:'50%',height:'45px',backgroundColor:'#02D663',lineHeight:'45px'}}>确定</div>
                        </li>
                    </ul>
                }
            </div>
        )
    }
}
export default Zonghe