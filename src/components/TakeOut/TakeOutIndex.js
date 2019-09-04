import React from 'react';
import TakeOutHead  from './TakeOutHead';
import TakeOutNav from './TakeOutNav';
import TakeOutList from './TakeOutList';
import TakeOutMid from './TakeOutMid';
class TakeOutIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            scroll:''
        }
    }
    render(){
        return (
            <div id='TakeOutIndex' style={{maxHeight: '100%',overflowY:'auto'}}>
                <TakeOutHead scroll={this.state.scroll}/>
                <div style={{height:'45px'}}></div>
                <TakeOutNav/> 
                <TakeOutMid/>
                <TakeOutList scroll={this.state.scroll>637?this.state.scroll:""}/>
            </div>
        )
    }
    componentDidMount(){
        let el=document.getElementById('TakeOutIndex');
        let that=this;
        el.addEventListener('scroll',function(){
            console.log(this.scrollTop);
            if(this.scrollTop>637){
                that.setState({
                    scroll:this.scrollTop
                })
            }
            if(this.scrollTop<637){
                that.setState({
                    scroll:this.scrollTop
                })
            }
        })
    }
}
export default TakeOutIndex;