import React from 'react';
import Index from '../Index';
import { NavBar,Icon } from 'antd-mobile';
import '../../assets/css/takeout/shoplist.css';
import Loading from '../loading'
class ShopList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:'0',
            display:'none',
        }
    }
    componentDidMount(){
        Index.hide();
        Loading.show();
        setTimeout(()=>{
            this.setState({
                display:'block'
            },()=>{
                Loading.hide();
            })
        },700)
    }
    //绑定事件
    click(index,e){
        Loading.show();
        console.log('家在组建对象是',Loading);
        this.setState({
            index,
            display:'none'
        })
        console.log('被点击的是',index);
        let that=this;
       var time= setTimeout(() => {
            that.setState({
                display:'block'
            },()=>{
                Loading.hide();
                clearTimeout(time);
            })
        }, 700);
    }

    render(){
        return (
            <div>
               
                <div style={{position:'fixed',top:'0'}}>
                    <NavBar 
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => {window.history.go(-1);}}
                        leftContent={[
                            <p style={{color:'#3A3A3A'}} key={'美食'}>
                            美食  
                            </p>
                        ]}
                        rightContent={[
                            <Icon type='search' size='sm' key={'icon'}/>
                        ]}
                    ></NavBar>
                     <Loading />
                    <div id='div-main'>
                        <div className='div-ul' >
                            <ul id='ul'>
                                {
                                    this.props.ullist.map((val,index)=>{
                                        return <li key={index} className={this.state.index==index?'active_li':''} onClick={this.click.bind(this,index)}>{val}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <Icon type='down' size='sm' color='#fff' className='div-icon'/>
                    </div>
                    <ul id='flex_ulshop' className={this.props.scroll>643?'ul_flex_active':''}>
                        <li className='flex_ul_first_lishop'>
                            综合排序 
                            <img className='flex_ul_first_li_imgshop' src={require('../../assets/img/arrow.png')}/>
                        </li>
                        <li>距离最近</li>
                        <li>品质联盟</li>
                        <li className='flex_ul_last_lishop'>
                            筛选
                            <img className='flex_ul_last_li_imgshop' src={require('../../assets/img/select.png')}/>
                        </li>
                    </ul>
                </div>
                <div style={{height:'110px'}}></div>
                <ul className='ul_listshop' style={{display:this.state.display=='none'?'none':'block'}}>
                    {
                        this.props.datalist.map((val,index)=>{
                            return (
                                <li key={index}>
                                    <div style={{float:'left',width:'20%'}}>
                                        <img src={val.img} style={{width:'60px',height:'60px',marginTop:'10px'}}/>
                                    </div>
                                    <div style={{float:'left',width:'80%',textAlign:'left',paddingLeft:'5px'}}>
                                        <p style={{color:'#353535',fontSize:'14px',fontWeight:'600',marginBottom:'10px'}}>{val.title}</p>
                                        <div style={{color:'#5E5E5E',fontSize:'10px',marginBottom:'10px'}}>
                                            <span>
                                                <img src={require('../../assets/img/start .png')} style={{height:'12px'}}/>
                                            </span>
                                            <span style={{marginRight:'10px',marginLeft:'6px'}}>{val.start}</span>
                                            <span>月售1990单</span>
                                        </div>
                                        <div style={{marginBottom:'10px',color:'#5E5E5E',fontSize:'10px'}}>
                                            <span>{val.start}</span>
                                            <span style={{margin:'0px 3px'}}>|</span>
                                            <span>{val.get}</span>
                                        </div>
                                        <div style={{marginBottom:'10px',color:'#5E5E5E',fontSize:'10px'}}>
                                            <span className='tipshop' style={{border:'1px solid #E2E2E2',padding:'1px 3px'}}>{val.tip[0]}</span>
                                            <span className='tipshop' style={{border:'1px solid #E2E2E2',padding:'1px 3px'}}>{val.tip[1]}</span>
                                        </div>
                                        <div>
                                            <p className='jianshop' style={{width:'14px',height:'14px',backgroundColor:'#FC7178',color:'#fff',fontSize:'10px',textAlign:'center',lineHeight:'14px'}}>
                                                减
                                            </p>
                                            <span style={{color:'#656567',fontSize:'10px',lineHeight:'14px'}}>{val.sport}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ShopList