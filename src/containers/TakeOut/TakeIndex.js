import TakeOutIndex from '../../components/TakeOut/TakeOutIndex';
import { connect } from 'react-redux';
import axios from 'axios'; 
  const mapStateToProps=function(state){
    return {
                data:state.takeoutindex,
            }
}
const mapDispatchToProps=function(dispatch){
    return {
        click:()=>{dispatch({type:'change',value:'ssss'})},
        //位置定位功能
        gps:()=>{navigator.geolocation.getCurrentPosition((position)=>{
            console.log('坐标信息是',position);
            var location=(position.coords.latitude).toFixed(6)+','+(position.coords.longitude).toFixed(6);
            var url=`https://restapi.amap.com/v3/geocode/regeo?key=9c9781a8136e142608303a9b603dba59&location=${location}`;
            axios.get(url).then((res)=>{
                               console.log(res.data.regeocode.formatted_address);
                               dispatch({type:'gps',value:res.data.regeocode.formatted_address})
                      })
        },()=>{
            console.log('错误');
        })},
        //其余事件
        
    }
}
const TakeIndex=connect(mapStateToProps,mapDispatchToProps)(TakeOutIndex)
export default TakeIndex