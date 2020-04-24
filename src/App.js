import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {

  state = {
    string: "",
    length: 0
  }

  
  deleteCharacter = (key) => {
    let stringArray = this.state.string.split('');
    stringArray.splice(key, 1);
    this.setState({string: stringArray.join('')});
  }
  
  render() {
    const updateString = (event) => {
      this.setState({
        string: event.target.value,
      })
    }

  
    const breakString = (string) => {
      let stringArray = this.state.string.split('')
      return stringArray.map((character, index) => 
        <CharComponent 
          key={index}
          character={character} 
          deleteCharacter={() => this.deleteCharacter(index)} 
        />
      )
    }

    return (
      <div className="App">
        <input type="text" onChange={updateString} value={this.state.string} />
        <p>{this.state.string}</p>
        <p>The string is {this.state.string.length} characters long</p>
        <ValidationComponent length={this.state.string.length}/><br/>
        {breakString(this.state.string)}  
      </div>
    );
  }
}

export default App;
