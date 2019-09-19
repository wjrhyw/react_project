import React from 'react';
import '../../assets/css/takeout/takeoutlist.css'
class TakeOutList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id='TakeOutList'>
                <p className='tuijian'>推荐商家­­­­­­­</p>
                <ul id='flex_ul' className={this.props.scroll>643?'ul_flex_active':''}>
                    <li className='flex_ul_first_li'>
                        综合排序 
                        <img className='flex_ul_first_li_img' src={require('../../assets/img/arrow.png')}/>
                    </li>
                    <li>距离最近</li>
                    <li>品质联盟</li>
                    <li className='flex_ul_last_li'>
                        筛选
                        <img className='flex_ul_last_li_img' src={require('../../assets/img/select.png')}/>
                    </li>
                </ul>
                <p style={this.props.scroll>643?{display:'block',height:'20px'}:{display:'none'}}></p>
                <ul className='ul_list'>
                    {
                        this.props.data.list.map((val,index)=>{
                            return (
                                <li key={index}>
                                    <div style={{float:'left',width:'20%'}}>
                                        <img src={val.img} style={{width:'60px',height:'60px',marginTop:'10px'}}/>
                                    </div>
                                    <div style={{float:'left',width:'80%',textAlign:'left',paddingLeft:'5px'}}>
                                        <p style={{color:'#353535',fontSize:'14px',fontWeight:'600',marginBottom:'10px'}}>{val.title}</p>
                                        <div style={{color:'#5E5E5E',fontSize:'10px',marginBottom:'10px'}}>
                                            <span>星星</span>
                                            <span style={{margin:'0 10px'}}>5.0</span>
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
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default TakeOutList