import React from 'react';
import '../../assets/css/orders.css';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import DingDancompItemInf from './OrderInfDetail';
import DingDancompItemList from './OrdersInfList';

class DingDancomp extends React.Component{
    render(){
        return(
           <Router>
               <Switch>
                    <Route exact path="/OrderInf/:id" component={DingDancompItemInf}/>
                    <Route component = {DingDancompItemList}/>
               </Switch>
           </Router>
        )
    }
}

export default DingDancomp;
