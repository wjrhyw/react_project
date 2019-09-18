import React from 'react';
import '../../assets/css/orders.css';
import { Button } from 'antd-mobile';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import uuid from 'uuid';

const orderData = {
    ordList:[
        {id:uuid(), shopname:'啃得起', sex:'男', tel:'15678904397'},
        {id:uuid(), shopname:'kfc', sex:'男', tel:'1567454397'},
        {id:uuid(), shopname:'餐厅', sex:'女', tel:'13478904397'},
        {id:uuid(), shopname:'dd烤肉饭', sex:'男', tel:'18678904397'},
        {id:uuid(), shopname:'拉面店', sex:'女', tel:'18778904397'},
        {id:uuid(), shopname:'奶茶店', sex:'女', tel:'456543343'},
        {id:uuid(), shopname:'带韩拌饭', sex:'女', tel:'12313213132'}
    ]
}

// class DingDancomp extends React.Component{
//     render(){
        
//         return(
//            <Router>
//                <Switch>
//                     <Route exact path="/OrderInf/:id" component={DingDancompItemInf}/>
//                     <Route exact path="/OrderInf" component={DingDancompItemList}/>
//                </Switch>
//            </Router>
//         )
//     }
// }

class DingDancompItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="CardOutSet">
                <div className="CardShopIcon">
                </div>
                <div className="CardInsideRight">
                    <div className="CardInsideRighchild1">
                        <Router>
                        <NavLink activeStyle={{color:'black'}} to={`/OrderInf/${this.props.orders.id}`}>
                            <div className="MainInf">
                                <div className="MaininfTop">
                                    <div className="ShopName">
                                       {this.props.orders.shopname}
                                    </div>
                                    <div className="ArrowRight"></div>
                                </div>
                                <div className="Time">
                                    2019-07-07 16:00
                                </div>
                            </div>
                        </NavLink>
                        </Router>
                        <div className="status">
                            订单已送达
                        </div>
                    </div>
                    <div className="CardInsideRighchild2">
                        <div className ="orderItem">asdad</div>
                        <div className ="orderPrice">19.6</div>
                    </div>
                    <div className="CardInsideRighchild3">
                            <Button className="Carildbtn" size="small">再来一单</Button>
                            <Button className="Carildbtn" size="small">删除订单</Button>
                    </div>
                </div>
            </div>
        )
    }
}

class DingDancompItemList extends React.Component{
    render(){
        return(
            <>
            <Router>
               <Switch>
                    <Route exact path="/OrderInf/:id" component={DingDancompItemInf}/>
                    <Route render={orderData.ordList.map((item,index)=>
            <DingDancompItem orders={item}  key={uuid()}></DingDancompItem>)
            }/>
               </Switch>
           </Router>
            </>
        )
    }
}

class DingDancompItemInf extends React.Component{
    render(){
        let {id} = this.props.match.params;
        let ordInfo =  orderData.ordList.find((item)=>{
            return item.id === id;
        });

        if(!ordInfo){
            this.props.history.push('/OrderInf');
            return null;
        }
        return (<>
            <div></div>
            <p>编号: {ordInfo.id}</p>
            <p>名字: {ordInfo.shopname}</p>
            <p>性别: {ordInfo.sex}</p>
            <p>电话: {ordInfo.tel}</p>
        </>)
    }
}



export default DingDancompItemList;