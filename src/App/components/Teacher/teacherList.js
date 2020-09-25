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
        // TODO Feedback: 是messages还是message呢？
        if (res.messages !== undefined) {
          message.error(res.message)
        } else {
          // TODO Feedback: 同理，不应该用location.reload
          location.reload()
        }
      })
    }
  };

  render() {
    return(
      <div>
        <h1 className="list-header">讲师列表</h1>
        {/*// TODO Feedback:部分命名欠佳，比如inputDisplay和namecontainer，从名字看不出来职责，命名应该更贴合业务和功能*/}
        <NameContainer
          people={this.state.teachers}
          inputDisplay
          handleInput={this.handleAddTeacher}
          placeHolder="讲师"
          handleDelete={deleteTeacher}
        />
      </div>
    )
  }
}

export default TeacherList;
