import { Card, Col, Row, Popover, Button, Form } from 'antd';
import { useEffect, useState } from 'react';

import BookingModal from './BookingModal';
import {getProperty} from '../services/api';
import {bookProperty} from '../services/api';
import { Link, useLocation } from 'react-router-dom';
const { Meta } = Card;


const Property  = () => {
  const location = useLocation();
  const [form] = Form.useForm();
  const [articleData,setArticleData] = useState([]);
  const [propID,setPropID] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (params) => {
    setPropID(params)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    form.validateFields().then(() => {
      bookProperty(form.getFieldsValue(true)).then((data) => {
        console.log(form.getFieldsValue(true));
    
        setIsModalOpen(false);
      })
      
    })
  
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {getProperty().then((data) => {
    var propertyData = [];
    if(data?.data["apartment"].length !=0)
    {
      data?.data["apartment"].map((build) => {
        propertyData.push(build)
      })
    }
    if(data?.data["commercial_building"].length !=0)
    {
      data?.data["commercial_building"].map((build) => {
        propertyData.push(build)
      })
    }
    if(data?.data["houses"].length !=0)
    {
      data?.data["houses"].map((build) => {
        propertyData.push(build)
      })
    }
    setArticleData(propertyData);
  })},[])
    
  return(
<>
{articleData.map((article) => {
     return <Row className='d-block' ><Col>
     <Card
     title = { <Row><Col span={12}>Property ID : {article.property_id}</Col><Col span={12} className='d-flex justify-content-end'><Button type="primary" onClick={() => {showModal(article.property_id)}}>Book</Button></Col></Row>}
     className='text-capatilize'
      >
       
        <BookingModal isModalOpen={isModalOpen} email={location.state.username} property={propID} form={form} setIsModalOpen={setIsModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
        
        <Row>
          <Col span={12}>
          <p>City : </p>
          </Col>
          <Col span={12}>
          <p>{article.city}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <p>State : </p>
          </Col>
          <Col span={12}>
          <p>{article.state}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
          <p>Type : </p>
          </Col>
          <Col span={12}>
          <p>{article.type}</p>
          </Col>
        </Row> 
        <Row>
          <Col span={12}>
          <p>Square Footage : </p>
          </Col>
          <Col span={12}>
          <p>{article.square_footage}sqft</p>
          </Col>
        </Row> 
        {(article.type == "house" || article.type == "apartment") && (
        <Row>
          <Col span={12}>
          <p>Number of Rooms : </p>
          </Col>
          <Col span={12}>
          <p>{article.no_of_rooms} rooms</p>
          </Col>
        </Row> )}
        {article.type == "commercial building" && (
        <Row>
          <Col span={12}>
          <p>Type of Business : </p>
          </Col>
          <Col span={12}>
          <p>{article.type_of_business}</p>
          </Col>
        </Row> )}
        {article.type == "apartment" && (
        <Row>
          <Col span={12}>
          <p>Building Type : </p>
          </Col>
          <Col span={12}>
          <p>{article.building_type}</p>
          </Col>
        </Row> )}
        <Row>
          <Col span={12}>
          <p>Nearby Schools : </p>
          </Col>
          <Col span={12}>
          <p>{article.nearby_schools}</p>
          </Col>
        </Row> 
        <Row>
          <Col span={12}>
          <p>Land : </p>
          </Col>
          <Col span={12}>
          <p>{article.land}</p>
          </Col>
        </Row> 
        <Row>
          <Col span={12}>
          <p>Crime Rates : </p>
          </Col>
          <Col span={12}>
          <p>{article.crime_rates}%</p>
          </Col>
        </Row> 
        <Row>
          <Col span={12}>
          <p>Availability : </p>
          </Col>
          <Col span={12}>
          <p>{article.availability?"Yes" : "No"}</p>
          </Col>
        </Row> 
        <Row>
          <Col span={12}>
          <p>Description : </p>
          </Col>
          <Col span={12}>
          <p>{article.description}</p>
          </Col>
        </Row> 
        <Row>
          <Col span={12}>
          <p>Neighborhood : </p>
          </Col>
          <Col span={12}>
          <p>{article.neighborhood}</p>
          </Col>
        </Row> 
        <Row>
          <Col span={12}>
          <p>Price : </p>
          </Col>
          <Col span={12}>
          <p>${article.price}</p>
          </Col>
        </Row> 
        <Row>
          <Col span={12}>
          <p>Vacation Homes : </p>
          </Col>
          <Col span={12}>
          <p>{article.vacation_homes}</p>
          </Col>
        </Row>  
      </Card>
      </Col>  
      </Row>
})}
</>
  )
  };
export default Property;