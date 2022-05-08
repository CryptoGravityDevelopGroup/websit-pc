import React from 'react'
import styles from './Dialog.module.css';

export function Dialog(props) {
  const {dialogStatus, content, onCancel, onOk, cancelBtnContent, okBtnContent} = props;
  const handleOk = () => {
    onOk();
  }
  const handleCanel = () => {
    onCancel();
  }
  return (
    <>
    {
      dialogStatus ? 
        <div className={styles["app-dialog"]} >
          <div className={styles["dialog-content"]}>{content}</div>
          {
            onCancel != undefined ? (
              <div className={styles["dialog-btn"]} onClick={() => {
                  handleCanel()
                }}>
                <div className={styles["btn-item"]}>{cancelBtnContent ? cancelBtnContent : 'Cancel'}</div>
              </div>
            ) : ''
          }
          {
            onOk !=undefined ? (
              <div className={styles["dialog-btn"]} onClick={() => {
                handleOk()
              }}>
              <div className={styles["btn-item"]}>{okBtnContent ? okBtnContent : 'OK'}</div>
            </div>
            ) : ''
          }
        </div>
      : ''
    }
    </>
  )
}