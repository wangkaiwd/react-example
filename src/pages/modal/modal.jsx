import React, { Component } from 'react';
import styles from './modal.less'
class Modal extends Component {
  render() {
    return (
      <div className={styles.modalMask}>
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>
            标题
          </div>
          <div className={styles.modalBody}>
            内容
          </div>
          <div className={styles.modalFooter}>
            <button>取消</button>
            <button>确认</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;