import { Button, Col, Modal, Row, Form, Input, DatePicker } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

var uuid;
const BookingModal = (props) => {
    const {isModalOpen,handleOk,handleCancel,property,form,email} = props;
    useEffect(() =>
    {
      uuid = uuidv4().slice(1,7);
    },[isModalOpen])
    form.setFieldValue("property_id",property);
    form.setFieldValue("booking_id",uuid)
  return (
    <>
    <Form
                   form={form}
                   name="register"
                   scrollToFirstError
       >
      <Modal title={<Form.Item
      name={"booking_id"}
      >
        Booking ID : {uuid}
      </Form.Item>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[ 
        <>
            <Button onClick={handleCancel}>Cancel</Button>

            <Button type='primary' onClick={handleOk}>Book</Button>
            </>
            ]}>
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
                initialValue={email}
                
            >
                <Input disabled={true} value={email} className='fw-semibold text-dark' />
            </Form.Item>
            <Form.Item
                name="property_id"
                label="Property ID"
                rules={[
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}                
            >
                <Input disabled={true} className='fw-semibold text-dark' />
            </Form.Item>
            <Form.Item
                name="credit_card_no"
                label="Credit Card Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your credit card number',
                    },
                ]}
                
            >
                <Input className='fw-semibold text-dark' />
            </Form.Item>
            <Form.Item
                name="expiry_date"
                label="Expiry"
                rules={[
                    {
                        required: true,
                        message: 'Please input your move in date',
                    },
                ]}
            >
             <Input placeholder='MM/YY' className='fw-semibold text-dark' />

            </Form.Item>
      </Modal>
      </Form>
    </>
  );
};
export default BookingModal;