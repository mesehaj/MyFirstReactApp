import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from '@material-ui/core/Button';
//import { render } from '@testing-library/react';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import { CardList } from './components/card-list/card-list.component.jsx';
import './components/card/card.Styles.css';

class App extends React.Component {
  constructor (){
    super();
    this.state = {
      monsters: [],
      name: 'Dracula',
      thought: 'I am Here for Your Blood!',
      id: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    return (
    <div className="App bg-warning">
    <div>
        <h1 className="text-monospace">Funky Monster Card WebApp</h1>
        <Nav fill defaultActiveKey="/home"  className="justify-content-left text-uppercase font-weight-bold font-italic text-monospace text-white rounded-circle ">
          <Nav.Item className="border border-success rounded-pill  bg-dark ">
            <Nav.Link href="/home">Reload Page</Nav.Link>
          </Nav.Item>
          <Nav.Item className="border border-danger rounded-pill  bg-dark ">
            <Nav.Link href="https://www.google.com" target="_blank">Go to google</Nav.Link>
          </Nav.Item>
          <Nav.Item className="border border-success rounded-pill  bg-dark ">
            <Nav.Link href="https://github.com/mesehaj/MyFirstReactApp" target="_blank">Get the Code of this app</Nav.Link>
          </Nav.Item>
          <Nav.Item className="border border-danger rounded-pill  bg-dark ">
            <Nav.Link href="https://jsonplaceholder.typicode.com/users" target="_blank">JSON data of the app</Nav.Link>
          </Nav.Item>
          <Nav.Item className="border border-success rounded-pill  bg-dark ">
            <Nav.Link href="https://react-bootstrap.github.io/" target="_blank">Learn Bs React</Nav.Link>
          </Nav.Item>
        </Nav>
    </div>
    <br></br>
    <Jumbotron className="w-100 bg-danger d-flex align-items-center">
      <h1>Welcome, to Funky Monster Card Maker!</h1>
        <h3 className="text-warning">
          Create Your Own Live MonsterCard
        </h3>
        <p className="w-25 float-left">
        <Form><Form.Group controlId="formBasicId">
        <Form.Label>Enter Random Number</Form.Label>
        <Form.Control type="number" name="id" placeholder="Enter Your Favourite Number" value={ this.state.id } onChange={ this.handleChange } max="100" min="1"/>
      </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Enter your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Nick Name" value={ this.state.name } onChange={ this.handleChange }/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Your Email</Form.Label>
          <Form.Control type="thought" name="thought" placeholder="Enter Thoughts" value={ this.state.thought } onChange={ this.handleChange } maxlength = "50"/>
        </Form.Group>
      </Form>
        </p>
        <p className="d-flex justify-content-end ">
        <Card className="card-container w-75">
          <Card.Body> 
          <Image src={`https://robohash.org/${this.state.id}?set=set2`} thumbnail/>
          <Card.Title><h2>{this.state.name}</h2></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.state.thought}</Card.Subtitle>
        </Card.Body>
      </Card>
      </p>
    </Jumbotron>
    <div className="">
    <h2>Here are few samples:</h2>
      <CardList monsters= {this.state.monsters}/>
    </div>
  </div>
  );
}
  
}

export default App;
