import React, { useEffect, useRef } from 'react'
import styles from './MainPage.module.css';
import { Header } from '../../components/header';
import startBtn from '../../assets/start-btn.png'
import lottie from 'lottie-web';
import mainJson from '../../assets/lottie/cg_main.json';

export function MainPage() {
  const couterRef = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: couterRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: mainJson,
      assetsPath: '/lottie/earth-animation/images/'
    });
  }, [])
  return (
    <>
      <Header/>
      <div className={styles["page-content"]}>
        <div className={styles["cryptoGravity-wrap"]}>
          <div className={styles["cryptoGravity-earth-svg"]}>
            <div style={{width:'100%', height:'100%'}} ref={couterRef}></div>
          </div>
          <div className={styles["cryptoGravity-content"]}>
            <div className={styles["cryptoGravity-title"]}>CryptoGravity</div>
            <div className={styles["cryptoGravity-desc"]}>Building the next-generation intelligent application cloud service platform</div>
            <div className={styles['start-btn']}>
              <span>Start</span>
              <img className={styles['start-btn-img']} src={startBtn} alt="startBtn" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
