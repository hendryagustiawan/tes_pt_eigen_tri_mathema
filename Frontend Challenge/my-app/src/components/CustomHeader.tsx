import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const CustomHeader = () => {
  return (
    <>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="1" style={{ color: "tomato", fontWeight: "bold", fontSize: 40 }}>
            News
          </Menu.Item>
          <div style={{ justifyContent: "center" }}>
            <Menu.Item key="2" style={{ color: "yellow", fontWeight: "bold" }}>
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item key="3" style={{ color: "yellow", fontWeight: "bold" }}>
              Content
            </Menu.Item>
            <Menu.Item key="4" style={{ color: "yellow", fontWeight: "bold" }}>
              About us
            </Menu.Item>
          </div>
        </Menu>
      </Header>
    </>
  );
};
