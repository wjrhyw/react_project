import React from 'react';
import {WingBlank,NavBar,Icon,Flex} from 'antd-mobile';
import "../../assets/css/find/searchindex.css"
import request from "../../utils/request";

class SearchIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'123',
            hotsearch:["麻辣烫","星巴克","紫燕百味鸡","彭浦第一炸","黄焖鸡","正新鸡排","王小姐脆皮炸鸡","人在茶在","插花牛肉汤"],
            searchlist:[],
            reslist:[]
        }
        this.myref=React.createRef()
    }
    inputChange=()=>{
        var result=[];
        var findinput=this.myref.current.value
        console.log(findinput);
        var req=request("get","/shopping/restaurants",{latitude:31.22967,longitude:121.4762});
        req.then(
            (res)=> {
                this.setState({
                    searchlist:res
                },()=>{
                    var list=this.state.searchlist;
                    list.map((aaa)=>{
                        var yes=aaa.name.indexOf(findinput);
                        if(yes!==-1){
                            result.push(aaa.name)
                        }
                    })
                    console.log(result)
                    this.setState({
                        reslist:result
                    })
                })
            }
        );
        //将下拉的搜索框显示出来
        document.getElementById("reslist").style.display="block"
    };
    resListClick=(value)=>{
        console.log(value);
        this.myref.current.value=value;
    }


    render(){
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}>搜索</NavBar>
                <WingBlank>
                    <div style={{marginTop:'10px'}}>
                        <input type="text" className="inputSearch" ref={this.myref} onChange={this.inputChange} placeholder="请输入商家或美食名称"/>
                        <button type="primary" className="buttonSearch" inline >搜索</button>
                    </div>
                    <div id="reslist" style={{textAlign:'left',display:"none"}}>
                        {
                            this.state.reslist.map((value, index)=>{
                                return(
                                    <p key={index} style={{padding:"10px 0",borderBottom:'1px solid #ddd'}} onClick={()=>this.resListClick(value)}>{value}</p>
                                )
                            })
                        }
                    </div>
                    <p className="hotSearch">热门搜索</p>
                    <div>
                        <Flex wrap="wrap">
                            {
                                this.state.hotsearch.map((item,index)=>{
                                    return(
                                        <div key={index} className="hotSearchItem inline" onClick={()=>this.resListClick(item)}>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </Flex>
                    </div>
                </WingBlank>


            </div>
        )
    }
}
export default SearchIndex;
