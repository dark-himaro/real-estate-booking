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

const UserLoginDetails = (props) => {
const {form} = props;
    return (
        <>
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
                <Input />
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
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
              name="user"
              label="User"
              initialValue={"renter"}
            >
              <Select
                defaultValue="Renter"
                style={{
                  width: '100%',
                }}
                options={[
                  {
                    value: 'agent',
                    label: 'Agent',
                  },
                  {
                    value: 'renter',
                    label: 'Renter',
                  }
                ]}
              />
            </Form.Item>
            </>

    );
};
export default UserLoginDetails;
