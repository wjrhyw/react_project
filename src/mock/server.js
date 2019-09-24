const express=require('express');
const app=express();

app.get('/test',(req,res)=>{res.send('已经被响应')});

app.listen(9000,()=>{console.log('被其他人访问到了~~~');});