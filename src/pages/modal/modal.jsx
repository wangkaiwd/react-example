import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './modal.less'
class Modal extends Component {
  el = document.body
  modalElement = () => {
    const { title, onCancel, visible, onOk } = this.props
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
                <button onClick={onCancel}>取消</button>
                <button onClick={onOk}>确认</button>
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