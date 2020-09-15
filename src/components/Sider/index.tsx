import React from "react";

import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

type SubMenuItem = {
    key: string 
    label: string
}
type SubMenu = {
    key: string 
    Icon: any
    title: string 
    children: SubMenuItem[]
}

const menus: SubMenu[]  = [
    {
        key: 'sub1',
        Icon: UserOutlined,
        title: 'subnav 1',
        children: [
            {
                key: '1',
                label: 'options 1'
            },
            {
                key: '2',
                label: 'options 2'
            },
            {
                key: '3',
                label: 'options 3'
            },
        ]
    },
    {
        key: 'sub2',
        Icon: LaptopOutlined,
        title: 'subnav 2',
        children: [
            {
                key: '4',
                label: 'options 4'
            },
            {
                key: '5',
                label: 'options 5'
            },
            {
                key: '6',
                label: 'options 6'
            },
            {
                key: '7',
                label: 'options 7'
            },
            {
                key: '8',
                label: 'options 8'
            },
        ]
    },
    {
        key: 'sub3',
        Icon: NotificationOutlined,
        title: 'subnav 3',
        children: [
            {
                key: '9',
                label: 'options 9'
            },
            {
                key: '10',
                label: 'options 10'
            },
            {
                key: '11',
                label: 'options 11'
            },
            {
                key: '12',
                label: 'options 12'
            },
        ]
    },

]

export default class LayoutSider extends React.Component<{},{}>{
    renderSubMenus(){
        return menus.map(menu=>{
            const {key, Icon, title, children} = menu
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
            const {key, label} = child
        return <Menu.Item key={key}>{label}</Menu.Item>
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