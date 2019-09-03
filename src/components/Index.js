import React,{Component} from 'react';
import { TabBar } from 'antd-mobile';
import TakeOutIndex from './TakeOut/TakeOutIndex';
import DingDancomp from './Orders/DingDancomp';
import SearchIndex from './Search/SearchIndex';

class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'takeoutTab',
      prerenderingSiblingsNumber:0,
    };
  }
  renderContent(Component) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center',width:'100%' }}>
          <Component/>
      </div>
    );
  }
  render(){
    return (
      <div style={{textAlign:'center'}}>
        <div style={{ position: 'fixed', height:'100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          prerenderingSiblingsNumber={this.state.prerenderingSiblingsNumber}
        >
          <TabBar.Item
            title="外卖"
            key="takeout"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../assets/img/unbarfirst.png')}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../assets/img/barfirst.png')}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'takeoutTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'takeoutTab',
              });
            }}
          >
            {this.renderContent(TakeOutIndex)}
          </TabBar.Item>
        <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/img/unbarsearch.png')}) center center /  21px 21px no-repeat` }}
                />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/img/barsearch.png')}) center center /  21px 21px no-repeat` }}
                />
            }
            title="搜索"
            key="search"
            selected={this.state.selectedTab === 'searchTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'searchTab',
              });
            }}
          >
            {this.renderContent(SearchIndex)}
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/img/unbardingdancomp.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/img/bardingdancomp.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            title="订单"
            key="dingdancomp"
            selected={this.state.selectedTab === 'dingdancompTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'dingdancompTab',
              });
            }}
          >
            {this.renderContent(DingDancomp)}
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/img/unbarme.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../assets/img/barme.png')}) center center /  21px 21px no-repeat` }}
              />
            }
            title="我的"
            key="mefile"
            selected={this.state.selectedTab === 'mefileTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'mefileTab',
              });
            }}
          >
            {this.renderContent(TakeOutIndex)}
          </TabBar.Item>
        </TabBar>
      </div>
      </div>
    )
  }
}

export default Index;
