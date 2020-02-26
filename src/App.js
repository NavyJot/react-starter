import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

// State with Functional Component 
/* const app = (props) => {
  const [personsState, setPersonState] = useState( {
        persons: [{name: 'Navjot'}, {name: 'XYZ'}],
        otherState: 'Other State'
      });

  const switchNameHandler = () => {
      setPersonState({
        persons : [{name: 'Navjot Kumar'}, {name: 'ABC'}],
        // otherState : personsState.otherState
      })
  }

  useState('some otherstring');

  const [otherState, setOtherState] = useState('Other State');

  return (
    <div className="App">
      <h1>React App</h1>
      <Person name={personsState.persons[0].name}/>
      <Person name={personsState.persons[1].name}> Test</Person>
      <button onClick={switchNameHandler}> Switch Name</button>
    </div>
  );
} */


class App extends Component {
  state = {
    persons: [{name: 'Navjot'}, {name: 'XYZ'}]
  }

  switchNameHandler = (name) => {
      // this.state.persons[0].name = 'Navjot Kumar';
      this.setState({persons : [
        {name: name}, {name: 'ABC'}
      ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons : [
      {name: 'Navjot'}, {name: event.target.value}
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>React App</h1>
        <Person name={this.state.persons[0].name}
          click={() => this.switchNameHandler('TTTTTTT')}/> 
          {/* it can be inefficient method */}
        <Person name={this.state.persons[1].name}
          changed={this.nameChangedHandler}
        > Test</Person>
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Navy')}> Switch Name</button>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h5', null, 'text'))
  }
}

export default App;
