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
        <Col className="sidebar col-2 bg-primary">
          <Navigation />
        </Col>
        <Col className="col-10 bg-light">
          <Main />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerSection;
