import { Card, Col, Row, Popover, Button, Form } from 'antd';
import { useEffect, useState } from 'react';
import {bookProperty} from '../services/api';
import {getBooking} from '../services/api';
import { Link, useLocation } from 'react-router-dom';
const { Meta } = Card;


const Booking  = () => {
  const [form] = Form.useForm();
  const [articleData,setArticleData] = useState([]);

  useEffect(() => {getBooking().then((data) => {
    console.log("data",data);
    setArticleData(data?.data)
  })},[])
    
  return(
<>
{articleData.map((article) => {
    console.log(article);
     return <Row className='d-block' ><Col>
     <Card
     title = { <Row><Col span={12}>Booking ID : {article.booking_id}</Col></Row>}
     className='text-capatilize'
      >      
        <Row>
          <Col span={12}>
          <p>Credit Card Number : </p>
          </Col>
          <Col span={12}>
          <p>{article.credit_card_no}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <p>Email : </p>
          </Col>
          <Col span={12}>
          <p>{article.email_id}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <p>Property ID : </p>
          </Col>
          <Col span={12}>
          <p>{article.property_id}</p>
          </Col>
        </Row>   
      </Card>
      </Col>  
      </Row>
})}
</>
  )
  };
export default Booking;