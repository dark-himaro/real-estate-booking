import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Card,
  Col,
  Row,
} from 'antd';

const { Option } = Select;

const Address = (props) => {
const {form} = props;
  return (
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
              <Input />
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
              <Input />
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
              <Input />
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
              <Input />
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
              <Input />
            </Form.Item>
            </>

  );
};
export default Address;
