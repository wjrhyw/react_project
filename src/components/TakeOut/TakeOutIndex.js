import React from 'react';
import TakeOutHead  from './TakeOutHead';
import TakeOutNav from './TakeOutNav';
import TakeOutList from './TakeOutList';
import TakeOutMid from './TakeOutMid';
import Index from '../Index';
class TakeOutIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            scroll:'',
        };
        console.log('takeoutindex获取到的props===============',this.props);
    }
    render(){
        return (
            <div id='TakeOutIndex' style={{maxHeight: '100%',overflowY:'auto'}}>
                <TakeOutHead scroll={this.state.scroll} data={this.props.data.takeouthead} gps={this.props.gps}/>
                <div style={{height:'45px'}}></div>
                <TakeOutNav data={this.props.data.takeoutnav}/> 
                <TakeOutMid data={this.props.data.takeoutmid}/>
                <TakeOutList data={this.props.data.takeoutlist} scroll={this.state.scroll>643?this.state.scroll:""}/>
            </div>
        )
    }
    componentDidMount(){
        Index.show();
        let el=document.getElementById('TakeOutIndex');
        let that=this;
        el.addEventListener('scroll',function(){
            if(this.scrollTop>643){
                that.setState({
                    scroll:this.scrollTop
                })
            }
            if(this.scrollTop<643){
                that.setState({
                    scroll:this.scrollTop
                })
            }
        })
      
    }
}
export default TakeOutIndex;