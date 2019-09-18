import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Login from './Login';
import MeFile from './MeFile'
import MyOrder from './MyOrder';
import Mall from './Mall';
import MemberCard from './MemberCard';
import ServiceCentre from './ServiceCentre';
import Download from './Download';

class Rou extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/MeFile/Login" component={Login}/>
                    <Route path="/Mefile/MyOrder" component={MyOrder}/>
                    <Route path="/MeFile/Mall" component={Mall}/>
                    <Route path="/MeFile/MemberCard" component={MemberCard}/>
                    <Route path="/MeFile/ServiceCentre" component={ServiceCentre}/>
                    <Route path="/MeFile/Download" component={Download}/>
                    <Route component = {MeFile}/>
                    {/* <Redirect exact from='/' to='MeFile'/> */}
                </Switch>
            </Router>
        )
    }
}
export default Rou;