import React, { Component } from 'react';
import './App.scss';
import StudentList from './components/StudentList';
import TeamList from './components/TeamList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <TeamList></TeamList>
        <StudentList></StudentList>
      </div>
    );
  }
}

export default App;
