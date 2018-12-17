import React, { Component } from 'react';
import Modal from './modal'
class UseModal extends Component {
  state = {
    visible: false
  }
  openModal = () => {
    this.setState({ visible: true })
  }
  render() {
    const { visible } = this.state
    return (
      <div>
        <button onClick={this.openModal}>切换</button>
        <Modal
          visible={visible}
          title="标题123"
        >
          please write something
        </Modal>
      </div>
    );
  }
}

export default UseModal;