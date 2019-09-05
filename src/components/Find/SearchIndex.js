import React from 'react';
import {WingBlank,NavBar,Icon,Flex} from 'antd-mobile';
import "../../assets/css/find/searchindex.css"

class SearchIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'123',
            hotsearch:["麻辣烫","星巴克","紫燕百味鸡","彭浦第一炸","黄焖鸡","正新鸡排","王小姐脆皮炸鸡","人在茶在","插花牛肉汤"]
        }
    }

    render(){
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}>搜索</NavBar>
                <WingBlank>
                    <div style={{marginTop:'10px'}}>
                        <input type="text" className="inputSearch" placeholder="请输入商家或美食名称"/>
                        <button type="primary" className="buttonSearch" inline >搜索</button>
                    </div>
                    <p className="hotSearch">热门搜索</p>
                    <div>
                        <Flex wrap="wrap">
                            {
                                this.state.hotsearch.map((item,index)=>{
                                    return(
                                        <div key={index} className="hotSearchItem inline">
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
