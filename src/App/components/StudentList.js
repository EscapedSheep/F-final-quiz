import React, { Component } from 'react';
import { fetchStudents, addStudent } from '../utils/http';
import './style/studentList.css';

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

  handleAddStudent = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      addStudent(this.state.name)
        .then((res) => {
          this.setState({
            students: res,
            name: ''
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  render() {
    return (
      <div id='main'>
        <h1>学员列表</h1>
        <div className='list'>
        {
          this.state.students.map((student) => (
            <div key={student.id} className='student'>
              <label>{student.id}. </label>
              {student.name}
            </div>
          ))
        }
        <input placeholder="+添加学员" className='student' id='nameInput' onKeyUp={this.handleAddStudent} value={this.state.name} onChange={this.handleNameChange}/>
        </div>
      </div>
    )
  }
}

export default StudentList;