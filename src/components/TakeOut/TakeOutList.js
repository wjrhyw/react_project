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

                <ul id='flex_ul' style={{backgroundColor:'#FFFFFD'}} className={this.props.scroll>637?'ul_flex_active':''}>
                    <li>综合排序</li>
                    <li>距离最近</li>
                    <li>品质联盟</li>
                    <li>筛选</li>
                </ul>
                
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