import React from 'react';
import {WingBlank,NavBar,Icon,Flex} from 'antd-mobile';
import '../../assets/font-awesome-4.7.0/css/font-awesome.css';
import '../../assets/css/find/business.css';
import shopicon from '../../assets/img/find/shopicon.jpg'
class FindIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            findlist:[]
        }
    }

    render(){
        return (
            <div>
                <NavBar id="shop" mode="dark" icon={<Icon type="left" />} onLeftClick={() => window.history.back(-1)}>店铺</NavBar>
                <div id="header">
                    <WingBlank>
                        <div>
                            <div className="header_shop">
                                <div>
                                    <img  src={shopicon} alt=""/>
                                </div>
                                <div>
                                    <div>12</div>
                                    <div>121</div>
                                    <div>2133</div>
                                </div>
                            </div>
                            <div>
                                减满优惠
                            </div>
                        </div>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
export default FindIndex;
