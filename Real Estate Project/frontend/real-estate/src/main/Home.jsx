import Router from '../routes';
import { Layout, Space } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/Public.css';

const { Header, Footer, Sider, Content } = Layout;

const Home = () => {
    return (
        <Router/>
    );
};

export default Home;