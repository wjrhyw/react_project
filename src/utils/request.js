import axios from 'axios';
import {baseUrl} from '../config/index'
const request=(method,url,data)=>{
    return new Promise((resolve,reject)=>{
        let option={
            method:method==='post'?'post':'get',
            url:baseUrl+url,
            params:method==='get'?data:null,
            data:method==='post'?data:null,
            timeout:2000,
            transformResponse:[(response)=>{
                response=JSON.parse(response);
                if(response.status===0){
                   return reject('错误原因：'+response.message)
                }else{
                    return response
                }
              }]
        }
        axios.request(option).then((res)=>{
             resolve(typeof res.data === 'object'? res.data:JSON.parse(res.data));
        }).catch((err)=>{
             reject(err)
        })
    })
}

export default request

