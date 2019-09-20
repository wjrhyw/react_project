import React, { Suspense, lazy }  from 'react';
import '../../assets/css/Orders/orders.css';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
// import DingDancompItemInf from './OrderInfDetail';
import DingDancompItemList from './OrdersInfList';
const DingDancompItemInf = lazy(() => import('./OrderInfDetail'));
// const DingDancompItemList = lazy(() => import('./OrdersInfList'));


class DingDancomp extends React.Component{
    render(){
        return(
           <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/orders/:id" component={DingDancompItemInf}/>
                    <Route component = {DingDancompItemList}/>
                </Switch>
                </Suspense>
           </Router>
        )
    }
}

export default DingDancomp;
