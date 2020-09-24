import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import './App.scss';
import StudentList from './components/student/StudentList';
import TeamList from './components/TeamList';
import AddStudentForm from './components/student/addStudentForm';

const Temp = () => (
  <>
    <TeamList />
    <StudentList />
  </>
);

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <BrowserRouter>
          <switch>
            <Route exact path='/' component={Temp} />
            <Route path='/add' component={AddStudentForm} />
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
