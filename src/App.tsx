import React, {FC} from 'react';
import './App.scss';
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";
import { Layout, } from 'antd';
import Header from './components/Header'
import Sider from './components/Sider'
import testRoutes,{routes, SubMenuItem} from './routes'
import {   
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
const { Content } = Layout;


const App:FC = ()=> {
  return (
    <div className="App">
      <Router>
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
                <Switch>
                  {
                        testRoutes.map(route=>(
                            <Route
                                key={route.key}
                                path={route.path}
                                exact={route.exact}
                                children={route.Component}/>
                        ))
                    }
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
        
    </div>
  );
}

export default App;
