import React from 'react';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import BusinessIndex from "./Business"
import FindIndex from "./FindIndex"
//import Search from "./Search"

class FindRouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/business"  component={BusinessIndex}  />
                    <Route component={FindIndex}  />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default FindRouter;
