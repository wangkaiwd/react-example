import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Button, Col, Row } from 'antd'
import styles from './officialParent.less'
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
    this.el.classList.add(styles['my-modal'])
  }
  render() {
    // 将this.props.children这个react元素放到我们创建的dom(this.el)中
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
              <Row type="flex" justify="end">
                <Col>
                  <Button type="primary" onClick={this.closeModal}>点击关闭</Button>
                </Col>
              </Row>
            </Modal>
          }

        </div>
      </div>
    );
  }
}

export default OfficialParent;