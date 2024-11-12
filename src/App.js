import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import Navbar from './components/Navbar';
import AppRouter from './router';

const App = () => {

  return (
      <div className="app">
        <Layout className="layout-wrapper">
          <Sider className="siderStyle">
            <Navbar />
          </Sider>
          <Layout className="content-wrapper">
            <div className="content">
              <AppRouter />
            </div>
          </Layout>
        </Layout>
      </div>
  )
}

export default App;
