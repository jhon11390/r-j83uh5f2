import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      words: ''
    }
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.words} onChange={this.updateWords.bind(this)}></textarea>
        <div className="counter">{this.state.words.length}</div>
      </div>
    );
  } 
  updateWords(event){
    this.setState({
      words: event.target.value
    });
  }
}

export default App;
