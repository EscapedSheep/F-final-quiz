import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { fetchStudents, deleteStudent } from '../../utils/http';
import './studentList.css';
import NameContainer from '../nameGridContainer/index';

class StudentList extends Component {
  state = {
    students: [],
  };

  componentDidMount() {
    fetchStudents()
      .then((res) => {
        this.setState({
          students: res
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleAddStudent = () => {
    this.props.history.push('/add')
  };

  render() {
    return (
      <div>
        <h1 className="list-header">学员列表</h1>
        <NameContainer
          people={this.state.students}
          handleInput={this.handleAddStudent}
          handleClick={this.handleAddStudent}
          handleDelete={deleteStudent}
          inputDisplay
          placeHolder="学员"
        />
      </div>
    )
  }
}

export default withRouter(StudentList);
