import {
  Button,
  Form,
  Select,
  Card,
  Col,
  Row,
  Layout,
  notification
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { CreateAccountApi } from '../services/api';
import { useState } from 'react';
import UserLoginDetails from '../components/UserLoginDetails';
import RenterDetails from '../components/RenterDetails';
import AgentDetails from '../components/AgentDetails';
import Address from '../components/Address';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const { Header, Footer, Sider, Content } = Layout;
const CreateAccount = () => {
  const navigate = useNavigate();
  const [api,contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type,notification_message) => {
    api[type]({
      message: 'Error',
      description: notification_message,
    });
  };
  const [isPage, setIsPage] = useState(1)
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    await CreateAccountApi(form.getFieldsValue(true)).then((data) => {
      console.log("da",data);      
      if(data.statusCode === 500)
      {
        openNotificationWithIcon('error',data.data)
      }
      else{
        navigate("/")
      }
    })
    .catch((error) => {
      console.log("err",error);
    })

  };


  return (
    <Row gutter={16} className='m-0 justify-content-center main-bg-img'>
      <Col span={8} className='d-flex align-items-center vh-100'>
        {contextHolder}
        <Card
          title={
            <Row>
              <Col span={8}>
                <span></span>
              </Col>
              <Col span={8}>
                <div className='d-flex justify-content-center'>
                  <div className='fs-3 fw-bold'>
                    REGISTER
                  </div>
                </div>
              </Col>
              <Col span={8} className='pt-3 text-end'>
                <Link to="/">
                  Login
                </Link>
              </Col>
            </Row>} className='w-570 h-550 overflow-auto rounded-4'>

          <Form 
            form={form}
            onFinish={onFinish}
            name="register"
            scrollToFirstError
          >
            <Layout className='bg-transparent'>
              <Content>
                {isPage == 1 && (<UserLoginDetails form={form} />)}
                {isPage == 2 && (form.getFieldValue("user") == "renter" ? <RenterDetails form={form} /> : <AgentDetails form={form} />)}
                {isPage == 3 && (<Address form={form} />)}
              </Content>
              <Footer className='bg-transparent'>


                {isPage != 3 && (<>
                  <Form.Item 
                  className='d-flex w-100 justify-content-center'
                  >
                    <Row className='d-flex'>
                    {isPage != 1 &&
                      (
                      <Col span={12} className='justify-content-end d-flex pe-2' >
                      <Button
                        onClick={() => {
                          if (isPage > 1) {
                            setIsPage(isPage - 1)
                          }
                        }
                        }>
                        Prev
                      </Button>
                      </Col>
                      )
                    }
                    <Col span={12} className='ps-2'>
                    <Button
                      onClick={() => {
                        form.validateFields().then(() => {
                          if (isPage < 3) {
                            setIsPage(isPage + 1)
                          }
                          else {
                            setIsPage(1)
                          }
                        })

                      }
                      }>
                      Next
                    </Button>
                    </Col>
                    </Row>
                  </Form.Item>
                </>)}

                {isPage == 3 &&
                  (
                    <Form.Item >
                    <Row className='d-flex'>
                      <Col span={12} className='justify-content-end d-flex pe-2'>
                      <Button
                        onClick={() => {
                          if (isPage > 1) {
                            setIsPage(isPage - 1)
                          }
                        }
                        }>
                        Prev
                      </Button>
                      </Col>
                      <Col span={12} className='ps-2'>
                      <Button type="primary" htmlType='submit'>
                        Register
                      </Button>
                      </Col>
                      </Row>
                    </Form.Item>)
                }
              </Footer>
            </Layout>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
export default CreateAccount;
