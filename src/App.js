import React from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomeScreen from './components/home-screen';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="App">
            <HomeScreen></HomeScreen>      
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
