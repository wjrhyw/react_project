import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect } from 'react-router-dom';
import TakeIndex from '../../containers/TakeOut/TakeIndex';
import ShopList from '../TakeOut/shoplist'
class TakeoutIndexRouter extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={TakeIndex} />
                    <Route exact  path='/ShopList/:id' component={ShopList} />
                </Switch>
            </Router>
        )
    }
}
export default TakeoutIndexRouter