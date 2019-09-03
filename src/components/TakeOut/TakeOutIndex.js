import React from 'react';
import TakeOutHead  from './TakeOutHead';
import TakeOutNav from './TakeOutNav';
class TakeOutIndex extends React.Component{
    render(){
        return (
            <div>
                <TakeOutHead/>
                <TakeOutNav/> 
            </div>
        )
    }
}
export default TakeOutIndex;