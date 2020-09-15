import React from 'react'
import {Layout,Menu} from 'antd'
import './header.scss'

const {Header} = Layout
const menus = [
    {
        id: 1,
    }
]

export default class LayoutHeader extends React.Component<{},{}>{

    render(){
        return (
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        )
    }
}