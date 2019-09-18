import React from 'react';
import { Carousel } from 'antd-mobile';
import '../../assets/css/takeout/takeoutmid.css'
class TakeOutMid extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imgurl:['http://p1.music.126.net/Pj5btpNr_LNYRnzkY2Oklw==/109951164340630437.jpg','http://p1.music.126.net/KxpKJc1IQmuYRQaoFCvi_g==/109951164340632770.jpg','http://p1.music.126.net/q5tGuVS--IY8sQCrItsDZQ==/109951164341168942.jpg'],
            uldata:[{title:'品质套餐',tip:'搭配齐全吃的好',href:'立即抢购'},{title:'品质套餐',tip:'搭配齐全吃的好',href:'立即抢购'}]
        }
    }
    render(){
        return (
            <div className='mid_index'>
                <ul className='mid_index_ul'>
                    {
                        this.props.data.uldata.map((val,index)=>{
                            return <li key={index} className={index===0?'mid_index_ul_li_first':'mid_index_ul_li_second'} >
                                <p className='mid_index_ul_li_title'>{val.title}</p>
                                <p className='mid_index_ul_li_tip' >{val.tip}</p>
                                <p className='mid_index_ul_li_href' >{val.href} ></p>
                                <img src={require('../../assets/img/king.png')} className='mid_index_ul_li_img' />
                            </li>
                        })
                    }
                </ul>
                <div className='mid_index_div_vip'>
                    <img className='mid_index_div_vip_img' src={require('../../assets/img/king.png')} />
                    <span className='mid_index_div_vip_text'>超级会员</span>
                </div>
                <Carousel
                        dots={false}
                        autoplay={true}
                        autoplayInterval={2000}
                        infinite={true}
                    >
                        {
                            this.props.data.imgurl.map((val,index)=>{
                                return (
                                    <img className='mid_index_img' src={val} key={index} alt='...'/>
                                )
                            })
                        }
                </Carousel>
            </div>
        )
    }
}
export default TakeOutMid