import React from 'react';
import { NavBar } from 'antd-mobile';
import '../../assets/css/takeout/takeouthead.css'
class TakeOutHead extends React.Component{
    render(){
        return (
            <div >
                <NavBar className='head_index'
                    icon={<img className='head_index_img' src={require('../../assets/img/gps.png')}  alt='...'/>}
                    onLeftClick={() => console.log('地理位置定位')}
                    leftContent={[
                        <p className='head_index_text' key={'gps'}>
                            昆明理工大学
                        </p>
                    ]}
                ></NavBar>
            </div>
        )
    }   
}
export default TakeOutHead