import React from 'react';
import { Menu, Icon, Button, Layout, Card } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
import './app.scss';
import SideMenu from './layout/sideMenu';

function App (props) {
  return (
    <Layout className={'app'}>
      <Sider width={260}>
        <div className="logo">React-Example</div>
        <SideMenu/>
      </Sider>
      <Layout>
        <Content>
          <Card className={'app-content-card'}>
            content
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
