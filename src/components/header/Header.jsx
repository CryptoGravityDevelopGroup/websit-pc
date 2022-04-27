import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import userHeader from '../../assets/user-header.png'

export function Header() {
  const navigation = (key) => {
    console.log('key', key);
    const PageId = document.querySelector("#" + key);
    console.log('PageId.offsetTop',PageId.offsetTop);
    window.scrollTo({
      top: PageId.offsetTop - 100,
      behavior: "smooth",
    });
  }
  return (
    <>
    <div style={{height:'80px'}}></div>
    <div className={styles['app-header']}>
      <img src={logo} alt="logo" className={styles['app-logo']}/>
      <div className={styles['main-menu']}>
        <div className={styles['menu-item']} onClick={()=>{
          navigation('home')
        }}>Home</div>
        <div className={styles['menu-item']} onClick={()=>{
          navigation('introduction')
        }}>Introduction</div>
        <div className={styles['menu-item']} onClick={()=>{
          navigation('roadmap')
        }}>Roadmap</div>
        <div className={styles['menu-item']} onClick={()=>{
          navigation('tokens')
        }}>Tokens</div>
        <div className={styles['menu-item']} onClick={()=>{
          navigation('teams')
        }}>Teams</div>
        <div className={styles['menu-item']}>Docs</div>
      </div>
      <div className={styles['wallet-btn']}>
        Cannect wallet
      </div>
      <img src={userHeader} alt="userHeader" className={styles['user-header']} />
    </div>
    </>
  )
}
