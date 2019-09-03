import React from 'react';
import '../../assets/css/index.css';
//import { Card,WhiteSpace } from 'antd-mobile';

class DingDancomp extends React.Component{
    render(){
        return(
           <>
           <DingDancompItem/>
           <DingDancompItem/>
           <DingDancompItem/>
           </>
        )
    }
}

class DingDancompItem extends React.Component{
    render(){
        return(
            <div className="CardOutSet">
                <div className="CardShopIcon">
                </div>
                <div className="CardInsideRight">
                    <div className="CardInsideRighchild1">
                    
                    </div>
                    <div className="CardInsideRighchild2">
                    
                    </div>
                    <div className="CardInsideRighchild3">
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default DingDancomp;