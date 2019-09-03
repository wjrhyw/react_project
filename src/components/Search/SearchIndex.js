import React from 'react';
import {Button,NavBar,Icon} from 'antd-mobile';
import "../../assets/css/search/searchindex.css"

class SearchIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'123'
        }
    }

    render(){
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}>搜索</NavBar>
                <input type="text" className="inputSearch" placeholder="请输入商家或美食名称"/>
                <Button type="primary" className="buttonSearch">提交</Button>
            </div>
        )
    }
}
export default SearchIndex;
