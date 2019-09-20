import React from "react";
import {createForm} from 'rc-form';
import createHistory from 'history/createHashHistory';
import { List, InputItem, WingBlank,Button,WhiteSpace,NavBar,Icon } from 'antd-mobile';

const history = createHistory();

class BasicInputExample extends React.Component {
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.inputRef.focus();
  }

  onClick=()=>{
    console.log("onLeftClick");
    history.goBack();
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <NavBar mode="dark" onLeftClick={this.onClick.bind(this)} icon={<Icon type="left"/>}>密码登录</NavBar>
        <List>
          <InputItem
            {...getFieldProps('autofocus')}
            type="text"
            clear
            placeholder="请输入您的账号"
            ref={el => this.autoFocusInst = el}
          >账号</InputItem>
          <InputItem
            // {...getFieldProps('autofocus')}
            clear
            type="password"
            placeholder="请输入您的密码"
            // ref={el => this.autoFocusInst = el}
          >密码</InputItem>
        </List>
        <WhiteSpace/>

        <WingBlank>
            <Button type="primary" >登录</Button>
        </WingBlank>
      </div>
    );
  }
}

const Login = createForm()(BasicInputExample);
export default Login;

