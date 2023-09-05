import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/img/layout/logo-dark.png';

function About() {

  return (
    <>
      <div className='about-body'>
        <Container className='text-center'>
            <div className='py-5'>
              <h2 className='fw-bold about-title'>ABOUT US</h2>
              <img className='mt-3' src={Logo}/>
            </div>
        </Container>
      </div>
      <div className='about-story'>
        <Container>
            <Row>
              <Col md={6}>
                <div className='py-5'>
                  <h2 className='fw-bold mt-5'>The Grandome Story</h2>
                  <p className='text-justify mt-5'>There are several philosophies that say, if the house is not just a building to be occupied, the house has a deeper meaning.</p>

                  <p className='text-justify'>They interpret the house as something that can create comfort, warmth, and happiness in the heart. That's how Grandame was born. 
                    Since 2017, we make furniture with all our heart made as best as possible to support the comfort of people at home. By only using 
                    selected materials to maintain our quality.</p>

                  <p >We produce various kinds of luxury furniture with high quality and reliable. Some of the furniture that we produce include beds, 
                    sofas, dining areas, accessories, and so forth.</p>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
      <div className='vision bg-dark text-light py-4'>
        <Container className='mb-5'>
          <Row>
            <Col md={6}>
              <h2 className='mb-5 mt-5'>Vision</h2>
              <p className='text-justify'>
                We dedicate offer the world-class quality furniture with high quality materials obtained from natural resources in Indonesia. We develop into a trusted interior 
                business organization that growscontinuously with credible services.
              </p>
            </Col>
            <Col md={6}>
              <h2 className='mb-5 mt-5'>Mision</h2>
              <p className='text-justify'>
                <li>We strive to be market leader of Indonesian-made furniture on domestic and abroad</li>
                <li>We develop and manufacture furniture of high quality at affordable prices for retailers worldwide.</li>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='about-story'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='py-5'>
                <h2 className='fw-bold mt-5'>Furniture and its universe, a partnership that has been in operation for 20 years</h2>
                <p className='text-justify mt-5'>Franklin Gharbi has been living in Indonesia for 20 years. Part of his family is an antique dealer, the other works in the field of furniture, 
                design and marketing, so it is only natural that this history and cooking enthusiast headed towards this world he knows well. Arrived in Indonesia in 2001 to control an 
                order in a factory in Jepara, the furniture capital of the archipelago, shortly after he decided to launch a workshop which would later become a furniture factory, with 
                Luqi Hermawanti, his partner since creation. Over the years, the man who knows the market adapts his production according to demand and opens a showroom for local customers 
                in South Jakarta in 2019.</p>

                <p className='text-justify'>Jepara in 20 years has changed a lot, small craftsmen mainly produce furniture for outdoor use. The job of many companies located in the city is to buy a product and take 
                  care of the finishing. In 2001, Franklin and Luqi set up Chakranaga in a small warehouse, where they produced furniture and then employed 8 people. More than 300 people are 
                  now working there as the company has grown. From artisanal production, it has passed to industrial production. Opportunities and encounters push us to produce differently. 
                  The products are intended for an international market and sold primarily to wholesalers at international trade shows.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='about-adaptation'>
        <Container>
          <Row>
            <Col md={6}></Col>
            <Col md={6}>
              <div className='py-5'>
                <h2 className='fw-bold mt-5'>Furniture and its universe, a partnership that has been in operation for 20 years</h2>
                <p className='text-justify mt-5'>Franklin Gharbi has been living in Indonesia for 20 years. Part of his family is an antique dealer, the other works in the field of furniture, 
                design and marketing, so it is only natural that this history and cooking enthusiast headed towards this world he knows well. Arrived in Indonesia in 2001 to control an 
                order in a factory in Jepara, the furniture capital of the archipelago, shortly after he decided to launch a workshop which would later become a furniture factory, with 
                Luqi Hermawanti, his partner since creation. Over the years, the man who knows the market adapts his production according to demand and opens a showroom for local customers 
                in South Jakarta in 2019.</p>

                <p className='text-justify'>Jepara in 20 years has changed a lot, small craftsmen mainly produce furniture for outdoor use. The job of many companies located in the city is to buy a product and take 
                  care of the finishing. In 2001, Franklin and Luqi set up Chakranaga in a small warehouse, where they produced furniture and then employed 8 people. More than 300 people are 
                  now working there as the company has grown. From artisanal production, it has passed to industrial production. Opportunities and encounters push us to produce differently. 
                  The products are intended for an international market and sold primarily to wholesalers at international trade shows.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;