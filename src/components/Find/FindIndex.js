import React from 'react';
import {WingBlank,NavBar,Icon,Flex} from 'antd-mobile';
import {Link} from "react-router-dom"
import "../../assets/css/find/findindex.css"
import '../../assets/font-awesome-4.7.0/css/font-awesome.css'
import gaifan1 from '../../assets/img/find/gaifan1.jpg'
import gaifan2 from '../../assets/img/find/gaifan2.jpg'
import request from "../../utils/request"
//import Loading from "./Loading"
import {connect} from "react-redux";
import findindex from "../../store/reducers/Find/findreducers";
import store from "../../index";
import {GET_ALL_FIND} from "../../store/action/actionType";
import Loading1 from "../../components/loading"
import Index from "../Index";

class FindIndex1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[1,2,3]
        }
    }
    componentWillMount(){
        Index.show();
    }
    componentDidMount() {
        Loading1.show();
        var req=request("get","/shopping/v2/menu",{restaurant_id:2});
        req.then(
            (res)=> {
                console.log(res)
                store.dispatch({
                    type:GET_ALL_FIND,
                    list:res[0].foods
                })
                Loading1.hide();
              
            }
        )
    }
    // htmls(){
    //     if(this.state.show){
    //         return (
    //             // <Loading flag={this.state.show}></Loading>
    //         )
    //     }else{
    //         return null
    //     }
    // }
    render(){

        return (
            <div style={{background:"white"}}>
                {/* {this.htmls()} */}
                <Loading1 />
                <NavBar mode="dark" icon={<Icon type="left"/>} onLeftClick={() => console.log("111")}>发现</NavBar>
                <div style={{marginTop:"30px",fontSize:"18px"}}>
                    <i className="fa fa-thumbs-o-up" style={{color:"#DA305F"}} aria-hidden="true"></i>为你推荐
                </div>
                {/*<Loading1></Loading1>*/}
                <p style={{color:'#909090',fontSize:"12px",marginBottom:"20px"}}>你的口味,我都懂得</p>
                <WingBlank>
                    <div id="container">
                        {
                            this.props.list.map((value,index)=>{
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


const mapStateToProps = (state)=> {
    //console.log(state.findindex.list);
    return {
        list: state.findindex.list
    }
};

let FindIndex = connect(mapStateToProps)(FindIndex1);
export default FindIndex;
