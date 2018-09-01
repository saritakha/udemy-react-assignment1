import React, {Component} from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {

  state = {
    userOutput: [{
        name: '[input your name]',
        subject: '[unknown]'
      },
      {
        name: 'Minz',
        subject: 'Science'
      },
      {
        name: 'Szan6',
        subject: 'Math'
      }
    ]
  }

  userOutputHandler = (newInput) => {
    // console.log('checking');

    this.setState({
      userOutput: [{
          name: '[input your name]',
          subject: '[unknown]'
        },
        {
          name: 'Minz khao',
          subject: 'Science'
        },
        {
          name: 'Szan6 hjfkf',
          subject: 'Math'
        }
      ]
    })
  }

  inputChangeHandler = (event) => {
    this.setState({
      userOutput: [{
          name: event.target.value,
          subject: 'unknown'
        },
        {
          name: 'Minz',
          subject: 'Science'
        },
        {
          name: 'Szan6',
          subject: 'Math'
        }
      ]
    })
  }

  render() {
    const style= {
    backgroundColor:'green',
    border:'1px solid black',
    padding:'10px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    margin : '5%'
    }

    return ( 
    <div className = "App" >
      <h1 > Learning Basic of React!! </h1> 
      <UserInput 
      changed = {this.inputChangeHandler}
      /> 
      <UserOutput 
      name = { this.state.userOutput[0].name}
      subject = {this.state.userOutput[0].subject}
      /> 
      <UserOutput
      name = {this.state.userOutput[1].name}
      subject = {this.state.userOutput[1].subject}
      /> 
      <UserOutput
      name = {this.state.userOutput[2].name}
      subject = {this.state.userOutput[2].subject}
      /> 
      <button
      style={style}
      onClick= {this.userOutputHandler}>Show full name </button>
      </div>
    );
  }
}

export default App;