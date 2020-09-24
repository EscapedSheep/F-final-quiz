import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { fetchStudents, addStudent } from '../../utils/http';
import './studentList.css';
import NameContainer from '../nameGridContainer/index';

class StudentList extends Component {
  state = {
    students: [],
    name: ''
  }

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

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  // handleAddStudent = (event) => {
  //   event.preventDefault();
  //   if (event.keyCode === 13) {
  //     addStudent(event.target.value)
  //       .then((res) => {
  //         this.setState({
  //           students: res,
  //           name: ''
  //         })
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }
  handleAddStudent = () => {
    this.props.history.push('/add')
  };

  render() {
    return (
      <div id='main'>
        <h1 className="list-header">学员列表</h1>
        <NameContainer
          people={this.state.students}
          handleInput={this.handleAddStudent}
          inputDisplay
        />
      </div>
    )
  }
}

export default withRouter(StudentList);
