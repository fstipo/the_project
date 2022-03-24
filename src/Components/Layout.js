import React from 'react';
import Navigation from './Sidebar';
import Main from './Main';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="col-2 bg-primary">
          <Navigation />
        </Col>
        <Col className="col-10 bg-light">
          <Main />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
