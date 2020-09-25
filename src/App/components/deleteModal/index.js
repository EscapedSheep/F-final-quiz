import React from 'react';
import { Modal, message, Popover } from 'antd';
import './deleteModal.css'

class DeleteModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    const { onOk,person } = this.props;
    onOk(person.id).then(res => {
      // TODO Feedback: 应该去判断400 error
      if( res === null) {
        location.reload()
      } else {
        message.error(res.message)
      }
    });
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  content = () => {
    const {name, email, office, zoomId, github, id} = this.props.person;
    return(
    <div className="pop-over">
      {/*// TODO Feedback:不适合用p标签*/}
      {name && <p className="pop-field">name: {name}</p>}
      {email && <p className="pop-field">email: {email}</p>}
      {office && <p className="pop-field">office: {office}</p>}
      {zoomId && <p className="pop-field">zoomId: {zoomId}</p>}
      {github && <p className="pop-field">github: {github}</p>}
      {id && <p className="pop-field">id: {id}</p>}
    </div>
  )};

  render() {
    const { person, title } = this.props;
    return (
      <>
        {/*// TODO Feedback:本质上，这个组件并不是DeleteModal，而是Person*/}
        <Popover content={this.content} trigger="hover">
          {/*// TODO Feedback: 既然type是button，为什么用input呢*/}
        <input type='button' value={`${person.id}.${person.name}`} className='person-name' onClick={this.showModal}/>
        </Popover>
        <Modal
          title={`删除${title}`}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
        >
          <p>是否要删除{title}{person.id}.{person.name}</p>
        </Modal>
      </>
    );
  }
}

export default DeleteModal;
