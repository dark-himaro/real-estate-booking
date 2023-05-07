
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    Card,
    Col,
    DatePicker,
    Row,
} from 'antd';
import { getUserDetails } from '../services/api';
import dayjs from 'dayjs';
import { Link, useLocation } from 'react-router-dom';

const { Option } = Select;

const UserInformation = () => {
  const location = useLocation();
  const [form] = Form.useForm();
  getUserDetails(location.state).then((data) => {
    console.log("data",data);
    form.setFieldValue("name",data.data["name"] ?? null)
    form.setFieldValue("email",data.data["email_id"] ?? null)
    form.setFieldValue("user",location.state.user ?? null)
    form.setFieldValue("job",data.data["job_title"] ?? null)
    form.setFieldValue("location",data.data["preferred_location"] ?? null)
    form.setFieldValue("budget",data.data["budget"] ?? null)
    form.setFieldValue("date",data.data["move_in_date"] ?? null)
    form.setFieldValue("phone",data.data["contact"] ?? null)
    form.setFieldValue("building",data.data["building_number"] ?? null)
    form.setFieldValue("street",data.data["street"] ?? null)
    form.setFieldValue("city",data.data["city"] ?? null)
    form.setFieldValue("state",data.data["state"] ?? null)
    form.setFieldValue("zipcode",data.data["zipcode"] ?? null)
    console.log("form",form.getFieldsValue(true));
  })

  console.log("location.state.user",location.state.user);
  const customFormat = (value) => `${value.format('MM/DD/YYYY')}`
  return(
    <>
    <Form 
            form={form}
            name="register"
            scrollToFirstError
          >
  <Row gutter={16}>
    <Col span={8}>
      <Card title="User Personal" bordered={false} loading={false}>
      <Form.Item
                name="name"
                label="Full Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your FullName',
                    },
                ]}
            >
                <Input disabled={true} className='fw-semibold text-dark' />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
                
            >
                <Input disabled={true} className='fw-semibold text-dark' />
            </Form.Item>
            <Form.Item
              name="user"
              label="User"
            >
              <Input disabled={true} className='text-capitalize fw-semibold text-dark' />
            </Form.Item>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        {/* Agent Details */}
        {location.state["user"] !== "renter" && (
      <>
            <Form.Item
                name="job"
                label="Job Title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your job title',
                    },
                ]}
            >
                <Input disabled={true} className='fw-semibold text-dark'/>
            </Form.Item>
            </>
            )}
{/* Renter Details */}
{location.state["user"] === "renter" && (
<>
            <Form.Item
                name="location"
                label="Preferred Location"
                rules={[
                    {
                        required: true,
                        message: 'Please input your preferred location',
                    },
                ]}
            >
                <Input  disabled={true} className='fw-semibold text-dark'/>
            </Form.Item>
            <Form.Item
                name="budget"
                label="Budget"
                rules={[
                    {
                        required: true,
                        message: 'Please input your budget',
                    },
                ]}
            >
                <Input disabled={true} className='fw-semibold text-dark'/>
            </Form.Item>
            <Form.Item
                // name="date"
                label="Move in Date"
                rules={[
                    {
                        required: true,
                        message: 'Please input your move in date',
                    },
                ]}
            >
                <DatePicker 
                // defaultValue={form.getFieldValue("date")} 
                value={dayjs(form.getFieldValue("date"))}
                format={customFormat}
                disabled={true}
                className='fw-semibold text-dark'
                 />
            </Form.Item>
            </>
            )}
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input
                style={{
                  width: '100%',
                }}
                disabled={true}
                className='fw-semibold text-dark'
              />
            </Form.Item>            
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
      <>
            <Form.Item
              name="building"
              label="Building Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your Building Number',
                },
              ]}
            >
              <Input disabled={true} className='fw-semibold text-dark'/>
            </Form.Item>
            <Form.Item
              name="street"
              label="Street"
              rules={[
                {
                  required: true,
                  message: 'Please input your Street',
                },
              ]}
            >
              <Input disabled={true} className='fw-semibold text-dark'/>
            </Form.Item>
            <Form.Item
              name="city"
              label="City"
              rules={[
                {
                  required: true,
                  message: 'Please input your City',
                },
              ]}
            >
              <Input disabled={true} className='fw-semibold text-dark'/>
            </Form.Item>
            <Form.Item
              name="state"
              label="State"
              rules={[
                {
                  required: true,
                  message: 'Please input your State',
                },
              ]}
            >
              <Input disabled={true} className='fw-semibold text-dark'/>
            </Form.Item>

            <Form.Item
              name="zipcode"
              label="ZipCode"
              rules={[
                {
                  required: true,
                  message: 'Please input your ZipCode',
                },
              ]}
            >
              <Input disabled={true} className='fw-semibold text-dark'/>
            </Form.Item>
            </>
      </Card>
    </Col>
  </Row>
  </Form>
  </>
  )};
export default UserInformation;