import React from "react";
import {createForm} from 'rc-form';
import { List, InputItem, WingBlank,Button,WhiteSpace,NavBar,Icon } from 'antd-mobile';

class BasicInputExample extends React.Component {
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.inputRef.focus();
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <NavBar mode="dark" icon={<Icon type="left"/>}>密码登录</NavBar>
        <List>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="请输入您的账号"
            ref={el => this.autoFocusInst = el}
          >账号</InputItem>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="请输入您的密码"
            ref={el => this.autoFocusInst = el}
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

