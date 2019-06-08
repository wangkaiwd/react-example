import React from 'react';
import { Layout, Card } from 'antd';
import './demoContent.scss';

const { Content } = Layout;

function DemoContent (props) {
  return (
    <Content className={'demo-content'}>
      <Card className={'demo-content-card'}>
        {props.children}
      </Card>
    </Content>
  );
}

export default DemoContent;
