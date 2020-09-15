import React from "react";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const testNode = <div>Hello world!</div>
const testNode2 = <div>Hello React!</div>

export type SubMenuItem = {
    key: string 
    label: string
    path: string
    exact?: boolean
    Component: React.ReactNode
}
export type SubMenu = {
    key: string 
    Icon: any
    title: string 
    children: SubMenuItem[]
}

export default [
    {
        key: '1',
        label: 'options 1',
        path: '/sub1/options1',
        exact: true,
        Component: testNode
    },
    {
        key: '2',
        label: 'options 2',
        path: '/sub1/options2',
        exact: true,
        Component: testNode2
    },
] as SubMenuItem[]

export const routes: SubMenu[]  = [
    {
        key: 'sub1',
        Icon: UserOutlined,
        title: 'subnav 1',
        children: [
            {
                key: '1',
                label: 'options 1',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
            },
            {
                key: '2',
                label: 'options 2',
                path: '/sub1/options2',
                exact: true,
                Component: testNode
            },
            {
                key: '3',
                label: 'options 3',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
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
                label: 'options 4',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
            },
            {
                key: '5',
                label: 'options 5',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
            },
            {
                key: '6',
                label: 'options 6',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
            },
            {
                key: '7',
                label: 'options 7',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
            },
            {
                key: '8',
                label: 'options 8',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
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
                label: 'options 9',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
            },
            {
                key: '10',
                label: 'options 10',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
            },
            {
                key: '11',
                label: 'options 11',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
            },
            {
                key: '12',
                label: 'options 12',
                path: '/sub1/options1',
                exact: true,
                Component: testNode
            },
        ]
    },

]