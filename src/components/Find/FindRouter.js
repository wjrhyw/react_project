import React from 'react';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import Business from "./Business"
import FindIndex from "./FindIndex"

class FindRouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/business"  component={Business}  />
                    <Route component={FindIndex}  />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default FindRouter;
