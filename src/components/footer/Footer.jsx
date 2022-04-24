import React from 'react'
import styles from './Footer.module.css';
import ic_side_discord from '@/assets/ic_side_discord.png';
import ic_side_tel from '@/assets/ic_side_tel.png';
import ic_side_twitter from '@/assets/ic_side_twitter.png';

export function Footer() {
  return (
    <div className={styles["app-footer"]}>
      <div className={styles["app-footer-content"]}>
        <span>© 2022 CryptoGravity. Al Rights Reserved.</span>
        <span style={{"textDecoration":'underline'}}>Docs</span>
        <span className={styles["contact-wrap"]}>
          <span className={styles["contact-item-wrap"]}>
            <img src={ic_side_twitter} alt="" />
            <span>Twitter</span>
          </span>
          <span className={styles["contact-item-wrap"]}>
            <img src={ic_side_discord} alt="" />
            <span>discord</span>
          </span>
          <span className={styles["contact-item-wrap"]}>
            <img src={ic_side_tel} alt="" />
            <span>Telogram</span>
          </span>
        </span>
      </div>
    </div>
  )
}
