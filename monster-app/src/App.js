import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';

import { CardList } from './components/card-list/card-list.component.jsx';

class App extends React.Component {
  constructor (){
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstien',
          id: 'monster1'
        },
        {
          name: 'Zombie',
          id: 'monster2'
        },
        {
          name: 'Dracula',
          id: 'monster3'
        }
      ]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    return (
    <div className="App">
    <h1>Avatar App Using React</h1>
    <CardList monsters= {this.state.monsters}>
    </CardList>
      
    </div>
  );
}
  
}

export default App;
