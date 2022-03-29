import React from 'react';
import './Container.css';
import Navigation from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContainerSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="section__sidebar col-2 d-flex flex-shrink-0 flex-column text-white bg-dark">
          <Navigation />
        </Col>
        <Col className="bg-light">
          <Main />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerSection;
