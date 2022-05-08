import React, { useEffect } from 'react'
import styles from './Dialog.module.css';

export function Dialog(props) {
  const {dialogStatus, content, onCancel, onOk, cancelBtnContent, okBtnContent} = props;
  const handleOk = () => {
    onOk();
  }
  const handleCanel = () => {
    onCancel();
  }
  useEffect(() => {
    if(dialogStatus) {
      document.getElementsByTagName("body")[0].style.cssText='height:100%;overflow:hidden;';
    } else {
      document.getElementsByTagName("body")[0].style.cssText='';
    }
  }, [dialogStatus])
  return (
    <>
    {
      dialogStatus ? <div className={styles["modal-mask"]}></div> : ''
    }
    {
      dialogStatus ? 
        <div className={styles["app-dialog"]} >
          <div className={styles["dialog-content"]}>{content}</div>
          <div className={styles["btn-groups-wrap"]}>
            {
              onCancel != undefined ? (
                <div className={[styles["dialog-btn"], styles["cancel-btn"]].join(' ')} onClick={() => {
                    handleCanel()
                  }}>
                  <div className={styles["btn-item"]}>{cancelBtnContent ? cancelBtnContent : 'Cancel'}</div>
                </div>
              ) : ''
            }
            {
              onOk !=undefined ? (
                <div className={[styles["dialog-btn"], styles["ok-btn"]].join(' ')} onClick={() => {
                  handleOk()
                }}>
                  <div className={styles["btn-item"]}>{okBtnContent ? okBtnContent : 'OK'}</div>
                </div>
              ) : ''
            }
          </div>
        </div>
      : ''
    }
    </>
  )
}