import React from "react";
import { Layout, Menu } from 'antd';

import testRoutes,{routes, SubMenuItem} from '../../routes'
import {   
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class LayoutSider extends React.Component<{},{}>{
    renderSubMenus(){
        return routes.map(route=>{
            const {key, Icon, title, children} = route
            const icon = <Icon /> as React.ReactNode
            return (
                <SubMenu {...{key, icon, title}}>
                    {
                        this.renderMenuItems(children)
                    }
                </SubMenu>
            )
        })
    }

    renderMenuItems(children: SubMenuItem[]){
        return children.map(child=>{
            const {key, label, path} = child
        return <Link key={key} to={path}>{label}</Link>
        })
    }
    render(){
        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        this.renderSubMenus()
                    }
                </Menu>
            </Sider>

        )
    }
}