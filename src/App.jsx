import React from 'react';
import { Layout } from 'antd';
import DemoSider from 'layout/DemoSider/DemoSider';
import DemoHeader from 'layout/DemoHeader/DemoHeader';
import DemoFooter from 'layout/DemoFooter/DemoFooter';
import DemoContent from 'layout/DemoContent/DemoContent';

function App (props) {
  return (
    <Layout className={'app'}>
      <DemoSider/>
      <Layout>
        <DemoHeader/>
        <DemoContent>
          {props.children}
        </DemoContent>
        <DemoFooter/>
      </Layout>
    </Layout>
  );
}

export default App;
