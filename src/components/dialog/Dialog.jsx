import React from 'react'
import styles from './Dialog.module.css';

export function Dialog(props) {
  const {dialogStatus, content, onClose} = props;
  const closeDialog = () => {
    onClose();
  }
  return (
    <>
    {
      dialogStatus ? 
        <div className={styles["app-dialog"]} >
          <div className={styles["dialog-content"]}>{content}</div>
          <div className={styles["dialog-btn"]} onClick={() => {
              closeDialog()
            }}>
            <div className={styles["btn-item"]}>OK</div>
          </div>
        </div>
      : ''
    }
    </>
  )
}