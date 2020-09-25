import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import StudentList from './components/student/StudentList';
import TeamList from './components/team/TeamList';
import AddStudentForm from './components/student/addStudentForm';
import TeacherList from './components/Teacher/teacherList';

// TODO Feedback: 建议提取到单独的文件管理
const Home = () => (
  <>
    {/*// TODO Feedback:根据后台资源，命名为groups，trainers和trainees更统一*/}
    <TeamList />
    <TeacherList />
    <StudentList />
  </>
);

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={AddStudentForm} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
