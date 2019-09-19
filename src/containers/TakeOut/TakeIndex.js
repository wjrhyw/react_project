import TakeOutIndex from '../../components/TakeOut/TakeOutIndex';
import { connect } from 'react-redux';
import $ from 'jquery'

//封装获取地理位置
function gps(){
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            var location=(position.coords.latitude)+','+(position.coords.longitude);
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
    })
    })
}


  const mapStateToProps=function(state){
    return {
                data:state.takeoutindex,
            }
}
const mapDispatchToProps=function(dispatch){
    return {
        click:()=>{dispatch({type:'change',value:'ssss'})},
        //位置定位功能
        gps:()=>{gps().then((res)=>{dispatch({type:'gps',value:res})})}
    //其余事件
    }
}

const TakeIndex=connect(mapStateToProps,mapDispatchToProps)(TakeOutIndex)
export default TakeIndex