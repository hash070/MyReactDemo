import React from 'react';
import '../styles/Home.css';
import {UploadOutlined, UserOutlined,SlidersOutlined , VideoCameraOutlined, SettingOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

function Home(props) {

    let title=['用户管理','线型管理','用户组管理','数据导出'];

    return (
        <Layout style={{'height': '100vh'}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo">科学计算器管理后台</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[UserOutlined, SlidersOutlined, SettingOutlined, UploadOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            // label: `nav ${index + 1}`,
                            label: title.at(index),
                        }),
                    )}
                />
            </Sider>
            <Layout>
                <Header
                    className="site-layout-sub-header-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        Test
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    ©2022 Created By hash070
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;