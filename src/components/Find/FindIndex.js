import React from 'react';
import {WingBlank,NavBar,Icon,Flex} from 'antd-mobile';
import {Link} from "react-router-dom"
import "../../assets/css/find/findindex.css"
import '../../assets/font-awesome-4.7.0/css/font-awesome.css'
import gaifan1 from '../../assets/img/find/gaifan1.jpg'
import gaifan2 from '../../assets/img/find/gaifan2.jpg'
import request from "../../utils/request"

class FindIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            findlist:[]
        }
    }
    componentDidMount() {
        var req=request("get","/shopping/v2/menu",{restaurant_id:2});
        req.then(
             (res)=> {
                this.setState({
                     findlist:res[0].foods
                },()=>{
                    console.log(this.state.findlist)
                })
            }
        )
    }

    render(){

        return (
            <div style={{background:"white"}}>
                <NavBar mode="dark" icon={<Icon type="left"/>} onLeftClick={() => console.log('onLeftClick')}>发现</NavBar>
                <div style={{marginTop:"30px",fontSize:"18px"}}>
                    <i className="fa fa-thumbs-o-up" style={{color:"#DA305F"}} aria-hidden="true"></i>为你推荐
                </div>
                <p style={{color:'#909090',fontSize:"12px",marginBottom:"20px"}}>你的口味,我都懂得</p>
                <WingBlank>
                    <div id="container">
                        {
                            this.state.findlist.map((value,index)=>{
                                return(
                                    <div key={index} className="itemoption">
                                        <Link to="/business" >
                                            <img src={gaifan2} style={{width:"100%",height:"168px"}} alt=""/>
                                            <WingBlank size="md">
                                                <div style={{fontSize:'16px'}}>
                                                    {value.name}
                                                </div>
                                                <div style={{margin:"5px 0",color:"#909090",fontSize:"12px"}}>
                                                    <span>{value.tips}</span>
                                                </div>
                                                <div style={{display:"flex",alignItems:"center"}}>
                                                    <span style={{color:"#FF5510",fontSize:"18px"}}>¥{value.specfoods[0].price}</span>
                                                    <span className="fulldiscount">满22减17</span>
                                                </div>
                                                <hr/>
                                                <div style={{color:"#909090",margin:"7px 0px"}}>
                                                    <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                                                    <span style={{marginLeft:"10px"}}>香喷喷木桶饭</span>
                                                </div>
                                            </WingBlank>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </WingBlank>
            </div>
        )
    }
}
export default FindIndex;
