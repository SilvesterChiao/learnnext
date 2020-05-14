/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-12 16:50:32
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-14 10:27:32
 */

import React, { Component } from "react";
import PersonHeader from "../Header";
import { Layout, Menu } from "antd";

const { Content, Sider, Header, Footer } = Layout;

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

export default class LayoutBox extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { children } = this.props
    
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo">Learn React</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.SubMenu
              key="react"
              title={
                <span>
                  <span>React</span>
                </span>
              }
            >
              <Menu.Item key="1">
                <span className="nav-text">Home</span>
              </Menu.Item>
              <Menu.Item key="r-2">
                <span className="nav-text">Context</span>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: "#fff", padding: "0 24px" }}>
            Header
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
              padding: "24px",
              overflow: "initial",
              backgroundColor: "#fff",
            }}
          >
            <div style={layoutStyle}>
              <PersonHeader />
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
