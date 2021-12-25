import React from "react";
import LinePlot from "./LinePlot";
import Cartesianplot from "./Distance";
import Angleplot from "./Angle";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Navbar, Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            Freshman Autonomous Robot Competition
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <LinePlot />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Cartesianplot />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Angleplot />
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Navbar>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Robot Trajectory</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Distance Calculation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Angle Calculation</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <LinePlot />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Cartesianplot />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Angleplot />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default Home;
