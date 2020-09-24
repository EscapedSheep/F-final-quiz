import React from 'react';
import { Modal, message } from 'antd';

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

  render() {
    const { person, title } = this.props;
    return (
      <>
        <input type='button' value={`${person.id}.${person.name}`} className='person-name' onClick={this.showModal}/>
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
