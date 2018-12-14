import React, { Component } from 'react';
import Modal from './modal'
class UseModal extends Component {
  state = {
    visible: false
  }
  toggleModal = () => {
    this.setState({ visible: !this.state.visible })
  }
  render() {
    const { visible } = this.state
    return (
      <div>
        <button onClick={this.toggleModal}>切换</button>
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