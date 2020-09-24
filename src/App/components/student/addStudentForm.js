import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import './addStudentForm.css';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom'
import { addStudent } from '../../utils/http';

class AddStudentForm extends Component{
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    addStudent(values).then(() => this.props.history.push('/')).catch(e => console.log(e));
  };

  handleCancel = () => {
    this.props.history.push('/');
  }

  render() {
    const requireMsg = '此项为必填';
    return (
      <Form
        name="normal_login"
        className="add-form"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: requireMsg,
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              type: 'email',
              message: '邮箱格式错误',
            },
            {
              required: true,
              message: requireMsg,
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="office"
          label="办公室"
          rules={[
            {
              required: true,
              message: requireMsg,
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="zoomId"
          label="Zoom ID"
          rules={[
            {
              required: true,
              message: requireMsg,
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          name="github"
          label="Github账号"
          rules={[
            {
              required: true,
              message: requireMsg,
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item>
          <div className='btn-box'>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button type="primary" htmlType="button" onClick={this.handleCancel}>
              取消
            </Button>
          </div>
        </Form.Item>
      </Form>
    );
  }
};

export default withRouter(AddStudentForm);


