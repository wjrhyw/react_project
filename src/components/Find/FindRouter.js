import React from 'react';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import BusinessIndex from "./Business"
import FindIndex from "./FindIndex"

class FindRouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/business"  component={BusinessIndex}  />
                    <Route component={BusinessIndex}  />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default FindRouter;
