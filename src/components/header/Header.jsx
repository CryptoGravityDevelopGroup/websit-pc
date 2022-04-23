import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import userHeader from '../../assets/user-header.png'

export function Header() {
  return (
    <div className={styles['app-header']}>
      <img src={logo} alt="logo" className={styles['app-logo']}/>
      <div className={styles['main-menu']}>
        <div className={styles['menu-item']}>Home</div>
        <div className={styles['menu-item']}>Introduction</div>
        <div className={styles['menu-item']}>Roadmap</div>
        <div className={styles['menu-item']}>Tokens</div>
        <div className={styles['menu-item']}>Teams</div>
        <div className={styles['menu-item']}>Docs</div>
      </div>
      <div className={styles['wallet-btn']}>
        Cannect wallet
      </div>
      <img src={userHeader} alt="userHeader" className={styles['user-header']} />
    </div>
  )
}
