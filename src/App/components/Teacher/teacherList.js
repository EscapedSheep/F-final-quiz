import React, { Component } from 'react';
import {message} from 'antd';
import { fetchTeachers, addTeachers, deleteTeacher } from '../../utils/http';
import NameContainer from '../nameGridContainer';

class TeacherList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      teachers: []
    }
  }

  componentDidMount() {
    fetchTeachers()
      .then((res) => {
        this.setState({
          teachers: res
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleAddTeacher = (event) => {
    if(event.keyCode === 13) {
      addTeachers(event.target.value).then((res) => {
        if (res.messages !== undefined) {
          message.error(res.message)
        } else {
          location.reload()
        }
      })
    }
  };

  render() {
    return(
      <div>
        <h1 className="list-header">讲师列表</h1>
        <NameContainer
          people={this.state.teachers}
          inputDisplay
          handleInput={this.handleAddTeacher}
          placerHolder="讲师"
          handleDelete={deleteTeacher}
        />
      </div>
    )
  }
}

export default TeacherList;
