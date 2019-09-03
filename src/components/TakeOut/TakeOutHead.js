import React from 'react';
import { NavBar } from 'antd-mobile';
class TakeOutHead extends React.Component{
    render(){
        return (
            <div>
                <NavBar
                    icon={<img src={require('../../assets/img/gps.png')} style={{width:'15px',height:'15px'}} alt='...'/>}
                    onLeftClick={() => console.log('地理位置定位')}
                    leftContent={[
                        <p style={{fontSize:'13px',width:'250px',textAlign:'left'}}>
                            你的地理位置是昆明昆明昆明
                        </p>
                    ]}
                ></NavBar>
            </div>
        )
    }   
}
export default TakeOutHead