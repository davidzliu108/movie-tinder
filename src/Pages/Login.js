import React from "react";
import '../Assets/Styles/Login.css'
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Link to="/Home"><Button variant="primary" type="submit">
                Sign In
              </Button></Link>
              </Col>
              <Col md={{ span: 4, offset: 4 }}>
              <Link to="/Home"><Button variant="primary" type="submit">
                Sign Up
              </Button></Link>
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

// Credits: Masud Rana - Login Form in React with React Bootstrap UI
//          https://www.youtube.com/watch?v=YqqHzGP7__w

//          https://react-bootstrap.github.io/forms/overview/