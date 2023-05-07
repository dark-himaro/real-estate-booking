import { PieChartOutlined, UserOutlined, FileAddOutlined,BookOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, theme, Col, Row } from 'antd';
import { useState } from 'react';
import UserInformation from '../components/UserInformation';
import Property from '../components/Property';
import AddProperty from '../components/AddProperty'
import Booking from '../components/Booking';
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const UserDetails = () => {
  const [menuItem, setMenuItem] = useState(1);
  const menu = {
    1: <UserInformation />,
    2: <Property />,
    3:<Booking/>,
    4: <AddProperty/>
  }
  const location = useLocation();
  console.log("state", location.state["user"] === "renter");
  const items = [
    getItem('User', "1", <UserOutlined />),
    getItem('Property', "2", <PieChartOutlined />),
    getItem('Booking', "3", <BookOutlined />),
    location.state["user"] !== "renter" ? getItem('Add Property', '4', <FileAddOutlined />) : null,
  ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['']} onClick={(value) => {
          setMenuItem(value.key)
        }} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row>
            <Col span={16} className='d-flex justify-content-end'><h1>Real Estate Mangement</h1></Col>
            <Col span={8} className='d-flex justify-content-end pe-5'>
              <Link to="/">
                Logout
              </Link>
            </Col>
          </Row>


        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >

          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {menu[menuItem]}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default UserDetails;