import React, {FC} from 'react';
import './App.scss';
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";
import { Layout, } from 'antd';
import Header from './components/Header'
import Sider from './components/Sider'
const { Content } = Layout;


const App:FC = ()=> {
  return (
    <div className="App">
        <Layout>
          <Header></Header>
          <Layout>
            <Sider></Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
    </div>
  );
}

export default App;
