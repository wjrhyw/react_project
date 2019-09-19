import React, { Component } from 'react';
class Loading extends Component{
    render(){
        var styles = {
            main:{
                display:'flex',
                alignItems:'stretch',
                position:'fixed',
                height:'100%'
            }
        }
        return (
            <div>
                <div className={'main'} style={styles.main}>
                    <img  src={require('../../assets/img/find/loading.gif')}/>
                </div>
            </div>
        )
    }
}
export default Loading;
