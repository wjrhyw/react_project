import axios from 'axios';
import {baseUrl} from '../config/index'
const request=(method,url,data)=>{
    return new Promise((resolve,reject)=>{
        let option={
            method:method==='post'?'post':'get',
            url:baseUrl+url,
            params:method==='get'?data:null,
            data:method==='post'?data:null,
            timeout:5000,
        };
        axios.request(option).then((res)=>{
            setTimeout(()=>{
                return resolve(typeof res.data === 'object'? res.data:JSON.parse(res.data));
            },600)
        }).catch((err)=>{
            return reject(err)
        })
    })
}

export default request

