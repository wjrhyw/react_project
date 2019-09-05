import React from 'react';
import {WingBlank,NavBar,Icon,Flex} from 'antd-mobile';
import "../../assets/css/find/findindex.css"
import '../../assets/font-awesome-4.7.0/css/font-awesome.css'
import gaifan1 from '../../assets/img/find/gaifan1.jpg'
import gaifan2 from '../../assets/img/find/gaifan2.jpg'

class FindIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'123',
        }
    }

    render(){
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left"/>} onLeftClick={() => console.log('onLeftClick')}>发现</NavBar>
                <div style={{marginTop:"30px",fontSize:"18px"}}>
                    <i className="fa fa-thumbs-o-up" style={{color:"#DA305F"}} aria-hidden="true"></i>为你推荐
                </div>
                <p style={{color:'#909090',fontSize:"12px",marginBottom:"20px"}}>你的口味,我都懂得</p>
                <WingBlank>
                    <Flex>
                        <Flex.Item>
                           <div className="itemoption">
                               <img src={gaifan1} style={{width:"100%",height:"168px"}}  alt=""/>
                               <WingBlank size="md">
                                   <div style={{fontSize:'16px'}}>
                                       金针菇肉丝木桶饭
                                   </div>
                                   <div style={{margin:"5px 0",color:"#909090",fontSize:"12px"}}>
                                       <span>月售83</span>
                                       <span style={{marginLeft:"5px"}}>好评率100%</span>
                                   </div>
                                   <div>
                                       <span style={{color:"#FF5510",fontSize:"18px"}}>¥32.98</span>
                                       <span className="fulldiscount">满22减17</span>
                                   </div>
                                   <hr/>
                                   <div>dad</div>
                               </WingBlank>
                           </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="itemoption">
                                <img src={gaifan2} style={{width:"100%",height:"168px"}} alt=""/>
                                <div>
                                    1
                                </div>
                                <div>
                                    2
                                </div>
                                <div>
                                    3
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
export default FindIndex;
