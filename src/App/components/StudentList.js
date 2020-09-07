import React, { Component } from 'react';
import fetchStudents from '../utils/http';
import './style/studentList.css';

class StudentList extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    fetchStudents()
      .then((res) => {
        this.setState({
          students: res
        }, () => {
          console.log(res)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <div className='list'>
        {
          this.state.students.map((student) => (
            <div key={student.id}>
              <label for='studentName'>{student.id}. </label>
              <text name='studentName'>{student.name}</text>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default StudentList;