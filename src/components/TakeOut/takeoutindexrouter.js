import React from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import TakeOutIndex from '../TakeOut/TakeOutIndex';
import ShopList from './shoplist';
import $ from 'jquery';
import request from '../../utils/request';
import Business from '../Find/Business'
class TakeoutIndexRouter extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path='/' render={()=>{return <TakeOutIndex data={this.props.data} gps={this.props.gps}/>}} />
                    <Route exact path='/ShopList/:id' render={()=>{return <ShopList datalist={this.props.data.takeoutlist.list} shoplist={this.props.data.takeoutnav.shoplist} ullist={this.props.data.takeoutnav.ullist} list={this.props.shoplist}/>}} />
                    <Route exact path='/business' component={Business}></Route>
                </Switch>
            </Router>
        )
    }
    componentDidMount(){
        console.log('takeoutindexouter的props是=========',this.props);
        console.log('请求之后的数组是',this.props.data.takeoutnav.shoplist);
    }
}
function gps(){
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            var location=(position.coords.latitude)+','+(position.coords.longitude);
            console.log('经纬度是',location);
            var url=`https://apis.map.qq.com/ws/geocoder/v1/?`;
            var data={
                location,
                key:'A3TBZ-3RFK5-SVVIB-Q4ZAW-3WOH6-WMFTJ',
                output:'jsonp'
            };
            $.ajax({
                type: "get",
				dataType: 'jsonp',
				jsonp: "callback",
                jsonpCallback: "QQmap",
                data,
                url,
                success:function(json){
                    resolve(json.result.address);
                },
                error:function(err){
                    reject(err);
                }
            })
    },(err)=>{
        console.log('获取经纬度失败');
    },{
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
   })
    })
}
const mapStateToProps=function(state){
    console.log('状态是!!!!',state);
    return {
        data:state.takeoutindex,
    }
}
const mapDispatchToProps=function(dispatch){
    return {
        click:()=>{dispatch({type:'change',value:'ssss'})},
        //位置定位功能
        gps:()=>{gps().then((res)=>{dispatch({type:'gps',value:res})})},
        //获取商铺列表        
        shoplist:()=>{request('get','/shopping/restaurants?latitude=31.22967&longitude=121.4762').then((res)=>{console.log('被执行被执行',res);dispatch({type:'shoplist',value:res})})}
        //其余事件
    }
}
const TakeRouter=connect(mapStateToProps,mapDispatchToProps)(TakeoutIndexRouter);
export default TakeRouter