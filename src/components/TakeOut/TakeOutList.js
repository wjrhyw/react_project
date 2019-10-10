import React from 'react';
import '../../assets/css/takeout/takeoutlist.css';
import Zonghe from './zonghe';
import {Link} from 'react-router-dom'
class TakeOutList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fixed:false,
            text:'',
            select:'综合排序'
        }
       this.click=this.click.bind(this);
        this.Ziclick=this.Ziclick.bind(this);
        this.click1=this.click1.bind(this);
        this.Ziclick1=this.Ziclick1.bind(this);
        this.divclick=this.divclick.bind(this);
    }
    //绑定事件
    divclick(e){
        if(this.state.text=='综'&&this.state.fixed==true&&e.clientY>380){
            this.setState({
                fixed:false
            },()=>{
                Zonghe.hide()
            })
        }
        if(this.state.text=='筛'&&this.state.fixed==true&&e.clientY>485){
            this.setState({
                fixed:false
            },()=>{
                Zonghe.hide()
            })
        }
    }
    click(e){
     
        this.setState({
            fixed:true,
            text:'综'
        },()=>{
            Zonghe.show('综')
        });
    }
    click1(e){
        this.setState({
            fixed:true,
            text:'筛'
        },()=>{
            Zonghe.show('筛')
        });
    }
    //给子组件传递事件
    Ziclick(select){
        this.setState({
            select,
            fixed:false
        },()=>{
            Zonghe.hide();
        });
    }
    Ziclick1(){
        this.setState({
            fixed:false
        },()=>{
            Zonghe.hide();
        });
    }
    render(){
        return (
            <div id='TakeOutList' onClick={this.divclick}>
               
                 <Zonghe zclick={this.Ziclick} zclick1={this.Ziclick1}/>
                <p className='tuijian'>推荐商家­­­­­­­</p>
                <ul id='flex_ul' style={this.state.fixed==true?{position:'fixed',top:'45px',width:'100%'}:{}} className={this.state.fixed==true?'ulli_active':''} className={this.props.scroll>643?'ul_flex_active':''}>
                    <li onClick={this.click} className='flex_ul_first_li'  style={this.state.text=='综'&&this.state.fixed==true?{color:'#4186BC'}:{}}>
                        {this.state.select} 
                        {
                            this.state.text=='综'&&this.state.fixed==true
                            ?<img className='flex_ul_first_li_img' style={(this.state.select.slice(0,1)=='人'||this.state.select.slice(0,1)=='配')?{right:'-7px'}:{}} src={require('../../assets/img/arrow_active.png')}/>
                            :<img className='flex_ul_first_li_img' style={(this.state.select.slice(0,1)=='人'||this.state.select.slice(0,1)=='配')?{right:'-7px'}:{}} src={require('../../assets/img/arrow.png')}/>
                        }
                    </li>
                    <li style={this.state.text=='距'&&this.state.fixed==true?{color:'#4186BC'}:{}}>距离最近</li>
                    <li style={this.state.text=='品'&&this.state.fixed==true?{color:'#4186BC'}:{}}>品质联盟</li>
                    <li onClick={this.click1} style={this.state.text=='筛'&&this.state.fixed==true?{color:'#4186BC'}:{}} className='flex_ul_last_li'>
                        筛选
                        {
                            this.state.text=='筛'&&this.state.fixed==true
                            ?<img className='flex_ul_first_li_img' src={require('../../assets/img/select_active.png')}/>
                            :<img className='flex_ul_first_li_img' src={require('../../assets/img/select.png')}/>
                        }
                    </li>
                </ul>
                <p style={this.props.scroll>643?{display:'block',height:'20px'}:{display:'none'}}></p>
                <ul className='ul_list'>
                    {
                        this.props.data.list.map((val,index)=>{
                            return (
                                <li key={index}>
                                    <Link to='/business'>
                                    <div style={{float:'left',width:'20%'}}>
                                        <img src={val.img} style={{width:'60px',height:'60px',marginTop:'10px'}}/>
                                    </div>
                                    <div style={{float:'left',width:'80%',textAlign:'left',paddingLeft:'5px'}}>
                                        <p style={{color:'#353535',fontSize:'14px',fontWeight:'600',marginBottom:'10px'}}>{val.title}</p>
                                        <div style={{color:'#5E5E5E',fontSize:'10px',marginBottom:'10px'}}>
                                            <span>
                                                <img src={require('../../assets/img/start .png')} style={{height:'10px'}}/>
                                            </span>
                                            <span style={{marginRight:'10px',marginLeft:'6px'}}>{val.star}</span>
                                            <span>月售1990单</span>
                                        </div>
                                        <div style={{marginBottom:'10px',color:'#5E5E5E',fontSize:'10px'}}>
                                            <span>{val.start}</span>
                                            <span style={{margin:'0px 3px'}}>|</span>
                                            <span>{val.get}</span>
                                        </div>
                                        <div style={{marginBottom:'10px',color:'#5E5E5E',fontSize:'10px'}}>
                                            <span className='tip' style={{border:'1px solid #E2E2E2',padding:'1px 3px'}}>{val.tip[0]}</span>
                                            <span className='tip' style={{border:'1px solid #E2E2E2',padding:'1px 3px'}}>{val.tip[1]}</span>
                                        </div>
                                        <div>
                                            <p className='jian' style={{width:'14px',height:'14px',backgroundColor:'#FC7178',color:'#fff',fontSize:'10px',textAlign:'center',lineHeight:'14px'}}>
                                                减
                                            </p>
                                            <span style={{color:'#656567',fontSize:'10px',lineHeight:'14px'}}>{val.sport}</span>
                                        </div>
                                    </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
      //Loadding.show();
    }
}
export default TakeOutList