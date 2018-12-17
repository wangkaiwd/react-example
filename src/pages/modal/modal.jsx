import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './modal.less'
// 模态框显示隐藏的自动控制
//  1.在父组件没有传入 onOk 和onCancel函数
//      以父元素传入的visible为初始visible,之后在组件内部进行visible的控制
//  2. 父组件传入了onOk和onCancel函数
//  3. 父组件只传入了onOk或者onCancel其中之一
class Modal extends Component {
  state = {
    visible: false
  }
  // static getDerivedStateFromProps(prop, state) {
  //   return { visible: prop.visible }
  // }
  closeModal = () => {
    const { onCancel } = this.props
    onCancel && onCancel()
    this.setState({ visible: false })
  }
  confirm = () => {
    const { onOk } = this.props
    onOk && onOk()
    this.setState({ visible: false })
  }
  componentDidMount = () => {
    this.setState({ visible: this.props.visible })
  }
  componentWillReceiveProps(nextProps) {
    console.log('next', nextProps)
    this.setState({ visible: nextProps.visible })
  }
  el = document.body
  modalElement = () => {
    const { title } = this.props
    const { visible } = this.state
    return (
      <CSSTransition
        in={visible}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: styles.fadeEnter,
          enterActive: styles.fadeEnterActive,
          enterDone: styles.fadeEnterDone,
          exit: styles.fadeExit,
          exitActive: styles.fadeExitActive,
          exitDone: styles.fadeExitDone,
        }}
      >
        <div className={styles.modalMask}>
          <CSSTransition
            in={visible}
            timeout={300}
            appear={true}
            classNames={{
              appear: styles.scaleAppear,
              appearActive: styles.scaleAppearActive,
              exit: styles.scaleExit,
              exitActive: styles.scaleExitActive,
              exitDone: styles.scaleExitDone,
            }}
          >
            <div className={styles.modalContent}>
              <div className={styles.modalTitle}>
                {title}
              </div>
              <div className={styles.modalBody}>
                {this.props.children}
              </div>
              <div className={styles.modalFooter}>
                <button onClick={this.closeModal}>取消</button>
                <button onClick={this.confirm}>确认</button>
              </div>
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    )
  }
  render() {
    return createPortal(
      this.modalElement(),
      this.el
    )
  }
}
Modal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}
Modal.defaultProps = {
  visible: false,
  title: '模态框'
}
export default Modal;
