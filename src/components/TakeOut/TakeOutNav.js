import React from 'react';
import { Carousel } from 'antd-mobile';
import '../../assets/css/takeout/takeoutnav.css';
import {Link} from 'react-router-dom';
import uuid from 'uuid';
class TakeOutNav extends React.Component{
    render(){
       return (
        <div >
            <Carousel
                dots={false}
                autoplay={true}
                autoplayInterval={2000}
                infinite={true}
            >
                {
                    this.props.data.imgurl.map((val,index)=>{
                        return (
                            <img className='nav_firstimg' src={val} key={index} alt='...'/>
                        )
                    })
                }
            </Carousel>
            <Carousel 
                dotStyle={{width:'10px',height:'1px'}} 
                dotActiveStyle={{width:'10px',height:'1px',backgroundColor:'gray'}}               
                style={{marginTop:'20px'}}>
                {
                    this.props.data.list.map((val,index)=>{
                        return (
                            <ul className='nav_ul' key={index}>
                                {
                                    val.map((item,index)=>{
                                        return (
                                            <Link to={{pathname:`/ShopList/:${uuid()}`}}>
                                            <li className='nav_ul_li' key={index}>
                                                <img className='nav_ul_li_img' src={item.url} alt='...'/>
                                                <p className='nav_ul_li_p'>
                                                    {
                                                        item.title
                                                    }
                                                </p>
                                            </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </Carousel>
        </div>
       )
    }
}
export default TakeOutNav;