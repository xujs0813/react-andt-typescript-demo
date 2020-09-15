import React from "react";
import { Layout, Menu } from "antd";
import "./index.scss";

const { Header } = Layout;
const menus = [
  {
    id: 1,
    label: 'nav 1'
  },
  {
    id: 2,
    label: 'nav 2'
  },
  {
    id: 3,
    label: 'nav 3'
  },
];

export default class LayoutHeader extends React.Component<{}, {}> {

	renderMenus(){
		return menus.map(menu=>{
			return <Menu.Item key={menu.id}>{menu.label}</Menu.Item>
		})
	}
	
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          {this.renderMenus()}
        </Menu>
      </Header>
    );
  }
}
