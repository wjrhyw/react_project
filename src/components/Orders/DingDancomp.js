import React, { Suspense, lazy }  from 'react';
import '../../assets/css/Orders/orders.css';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import DingDancompItemList from './OrdersInfList';
import Loading from '../loading';
const DingDancompItemInf = lazy(() => import('./OrderInfDetail'));


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
