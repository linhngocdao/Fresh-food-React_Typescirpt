import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import { Input, Space } from 'antd';
import { Image } from 'antd';
const { Search } = Input;
// const onSearch = value => console.log(value);
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  HomeOutlined ,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

}
type Props = {}
const AdminLayout = (props: Props) => {
  return (
    <Layout style={{ minHeight: '100vh' }} >
    <Sider collapsible >
    <Image className='logo'
      width={200}
      src="https://res.cloudinary.com/assignment22/image/upload/v1656786391/Ass-reactjs/pngegg_lxh4jf.png"
    />
      <Menu theme="light"  defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to={"/"}>Return</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to={"/admin/products"}>Producst</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DesktopOutlined />}>
          <Link to={"/admin/categorys"}>Category</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<DesktopOutlined />}>
          <Link to={"/admin/slider"}>Slider</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<DesktopOutlined />}>
          <Link to={"/admin/user"}>User</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      {/* <Header className="site-layout-background " style={{ padding: 10 }} /> */}
      <Content style={{ margin: '0 16px' }}>
        <div className="site-layout-background bg-white" style={{ padding: 24, minHeight: 360 }}>
          <Outlet/>
        </div>
      </Content>

    </Layout>
  </Layout>
  )
}

export default AdminLayout