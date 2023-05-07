import {
    Form,
    Input,
    Select,
    DatePicker,
} from 'antd';
// import dayjs from 'dayjs';

const { Option } = Select;

const RenterDetails = (props) => {
const {form} = props;
const customFormat = (value) => `${value.format('MM/DD/YYYY')}`;
    return (
        <>
            <Form.Item
                name="location"
                label="Preferred Location City"
                rules={[
                    {
                        required: true,
                        message: 'Please input your preferred location',
                    },
                ]}
            >
                <Input />
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
                <Input />
            </Form.Item>
            <Form.Item
                name="date"
                label="Move in Date"
                rules={[
                    {
                        required: true,
                        message: 'Please input your move in date',
                    },
                ]}
            >
                <DatePicker 
                // defaultValue={'2015/01/01'} 
                format={customFormat}
                 />
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
export default RenterDetails;
