import React, { Suspense, lazy }  from 'react';
import '../../assets/css/Orders/orders.css';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import DingDancompItemList from './OrdersInfList';
const DingDancompItemInf = lazy(() => import('./DingDancompItemInf'));
const DingDancreate = lazy(() => import('./DingDancreate'));


class DingDancomps extends React.Component{
    render(){
        return(
           <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/createOrder" render={(props)=>{return <DingDancreate {...props} ordList={this.props.ordList}/>}} />
                    <Route exact path="/orders/:id" render={(props)=>{return <DingDancompItemInf {...props} ordList={this.props.ordList}/>}} />
                    <Route exact path='/' render={(props)=>{return <DingDancompItemList {...props} ordList={this.props.ordList} />}} />
                    <Route render={()=>{return <DingDancompItemList ordList={this.props.ordList} />}}/>
                </Switch>
                </Suspense>
           </Router>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        ordList: state.orderindex.ordList
    }
};

let DingDancomp = connect(mapStateToProps, null)(DingDancomps);
export default DingDancomp;
