
import { v4 as uuidv4 } from 'uuid';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Radio,
    Row,
    Select,
  } from 'antd';
  import {addProperty} from '../services/api';
  import { useEffect, useState } from 'react'; 
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
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  var uuid;
  
  const AddProperty = () => {
    useEffect(() =>
  {
    uuid = uuidv4().slice(1,7);
  },[])
// console.log("uuid",uuid);
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      addProperty(values).then((data) => {
        console.log("dtatat",data);
      })
    };
    const [buildingType, setBuildingType] = useState("house");
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="property_id"
          label="Property ID:"
          initialValue={uuid}
        >
          <Input
          disabled
          />
        </Form.Item>
        <Form.Item
              name="type"
              label="Type"
              initialValue={"house"}
            >
              <Select
                defaultValue="house"
                style={{
                  width: '100%',
                }}
                options={[
                  {
                    value: 'house',
                    label: 'House',
                  },
                  {
                    value: 'commercial building',
                    label: 'Commercial Building',
                  },
                  {
                    value: 'apartment',
                    label: 'Apartment',
                  }
                ]}
                onChange={(value) => {
                    setBuildingType(value)
                }}
              />
            </Form.Item>
            <Form.Item
                name="location"
                label="Street"
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
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please input Description',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          name="neighborhood"
          label="Neighborhood"
          rules={[
            {
              required: true,
              message: 'Please input Neighborhood',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          name="crime_rates"
          label="Crime Rates (in %)"
          rules={[
            {
              required: true,
              message: 'Please input Crime Rates',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="nearby_schools"
          label="Nearby Schools"
          rules={[
            {
              required: true,
              message: 'Please input Nearby Schools',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          name="vacation_homes"
          label="Vacation Homes"
          rules={[
            {
              required: true,
              message: 'Please input Vacation Homes',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          name="land"
          label="Land"
          rules={[
            {
              required: true,
              message: 'Please input Land',
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  message: 'Please input Price',
                },
              ]}
            >
              <Input
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
        <Form.Item
              name="square_footage"
              label="Square Footage"
              rules={[
                {
                  required: true,
                  message: 'Please input Square Footage',
                },
              ]}
            >
              <Input
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            {
                (buildingType === "house" || buildingType === "apartment") && (
            <Form.Item
              name="no_of_rooms"
              label="Number of Rooms"
              rules={[
                {
                  required: true,
                  message: 'Number of Rooms',
                },
              ]}
            >
              <Input
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>)
  }
           {
                buildingType === "apartment" && (
            <Form.Item
              name="building_type"
              label="Building Type"
              rules={[
                {
                  required: true,
                  message: 'Please input Building Type',
                },
              ]}
            >
              <Input />
            </Form.Item> )}
            {
                buildingType === "commercial building" && (
            <Form.Item
              name="type_of_business"
              label="Type of Business"
              rules={[
                {
                  required: true,
                  message: 'Please input Type of Business',
                },
              ]}
            >
              <Input />
            </Form.Item> )}
            <Form.Item 
            name={"availability"}
            rules={[
                {
                  required: true,
                  message: 'Please choose Availability',
                },
              ]} 
              label="Availability">
          <Radio.Group>
            <Radio value="true"> Yes </Radio>
            <Radio value="false"> No </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  };
  export default AddProperty;