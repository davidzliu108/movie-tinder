import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={8}>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Row>
              <Col>
              <Button variant="primary" type="submit">
                Sign In
              </Button>
              </Col>
              <Col md={{ span: 3, offset: 4 }}>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
              </Col>
              </Row>
              
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;