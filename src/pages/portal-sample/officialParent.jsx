import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import styles from './officialParent'
class Modal extends Component {
  el = document.createElement('div')
  componentDidMount = () => {
    this.createModal()
  }
  componentWillUnmount = () => {
    this.el.remove()
  }
  createModal = () => {
    document.body.appendChild(this.el)
    this.el.className = 'my-modal'
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}
class OfficialParent extends Component {
  state = {
    visible: false
  }
  openModal = () => {
    this.setState({ visible: true })
  }
  closeModal = () => {
    this.setState({ visible: false })
  }
  render() {
    const { visible } = this.state
    return (
      <div className={styles['official-parent']}>
        <div className={styles.box}>
          this div has overflow:hidden
          <Button onClick={this.openModal}>show modal</Button>
          {
            visible &&
            <Modal>
              <Button onClick={this.closeModal}>点击关闭</Button>
            </Modal>
          }
        </div>
      </div>
    );
  }
}

export default OfficialParent;