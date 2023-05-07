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

const AgentDetails = (props) => {
const {form} = props;
    return (
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
                <Input />
            </Form.Item>
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
              />
            </Form.Item>
            </>


    );
};
export default AgentDetails;
