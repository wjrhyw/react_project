import React from 'react';
import '../../assets/css/takeout/takeoutlist.css'
class TakeOutList extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div id='TakeOutList' >
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
                    <li>测试</li>
                    <li>测试</li>
                    <li>测试</li>
                    <li>测试</li>
                    <li>测试</li>
                </ul>
            </div>
        )
    }
}
export default TakeOutList