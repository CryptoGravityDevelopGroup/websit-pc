import React, {useState} from 'react'
import styles from './Footer.module.css';
import ic_side_discord from '@/assets/ic_side_discord.png';
import ic_side_tel from '@/assets/ic_side_tel.png';
import ic_side_twitter from '@/assets/ic_side_twitter.png';
import { Dialog } from '../../components/dialog';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const [developersDialogStatus, setDevelopersDialogStatus] = useState(false);
  const navigate = useNavigate();
  const openUrl = (url) => {
    if (url) {
      window.open(url);
      return;
    }
  };
  return (
    <div className={styles["app-footer"]}>
      <div className={styles["app-footer-content"]}>
        <span>© 2022 CryptoGravity. Al Rights Reserved.</span>
        <span style={{"textDecoration":'underline', 'margin':'0 314px 0 286px'}} onClick={() => {
          navigate('/docs')
        }} >Docs</span>
        <span className={styles["contact-wrap"]}>
          <span className={styles["contact-item-wrap"]} onClick={() => {
            openUrl('https://twitter.com/Gravity_NFTs');
          }}>
            <img src={ic_side_twitter} alt="" />
            <span>Twitter</span>
          </span>
          <span className={styles["contact-item-wrap"]} onClick={() => {
            setDevelopersDialogStatus(true);
          }} >
            <img src={ic_side_discord} alt="" />
            <span>discord</span>
          </span>
          <span className={styles["contact-item-wrap"]}  onClick={() => {
            setDevelopersDialogStatus(true);
          }}>
            <img src={ic_side_tel} alt="" />
            <span>Telogram</span>
          </span>
        </span>
      </div>
      <Dialog dialogStatus={developersDialogStatus} content='Currently only available to developers'
        onClose={() => {
          setDevelopersDialogStatus(false)
        }}/>
    </div>
  )
}
