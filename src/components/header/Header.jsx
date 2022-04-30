import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import userHeader from '../../assets/user-header.png'
import { useNavigate, useLocation } from 'react-router-dom';
// import { getWeb3 } from "@/utils/web3";

export function Header() {
  const navigate = useNavigate();
  const [address, setAddress] = useState(null);
  const location = useLocation();
  const navigation = (key) => {
    console.log('key', key);
    const PageId = document.querySelector("#" + key);
    console.log('PageId.offsetTop',PageId.offsetTop);
    window.scrollTo({
      top: PageId.offsetTop - 80,
      behavior: "smooth",
    });
  }
  const connectWallte = async() => {
    const res = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    address = res[0].substr(0, 8) + "..." + res[0].substr(-4, 4);
    window.sessionStorage.setItem("account", res[0]);
  }
  return (
    <>
    <div style={{height:'80px'}}></div>
    <div className={styles['app-header']}>
      <img src={logo} alt="logo" className={styles['app-logo']}/>
      <div className={styles['main-menu']}>
        <div className={styles['menu-item']} onClick={()=>{
          navigate('/')
          navigation('home')
        }}>Home</div>
        <div className={styles['menu-item']} onClick={()=>{
          navigate('/')
          navigation('introduction')
        }}>Introduction</div>
        <div className={styles['menu-item']} onClick={()=>{
          navigate('/')
          navigation('roadmap')
        }}>Roadmap</div>
        <div className={styles['menu-item']} onClick={()=>{
          navigate('/')
          navigation('tokens')
        }}>Tokens</div>
        <div className={styles['menu-item']} onClick={()=>{
          navigate('/')
          navigation('teams')
        }}>Teams</div>
        <div className={styles['menu-item']} onClick={()=>{
          // navigate('/docs')
          window.open('#/docs','_blank')
        }}>Docs</div>
      </div>
      <div className={styles['wallet-btn']} onClick={() => {
        connectWallte();
      }}>
        {address ? address : "Connect wallet" }
      </div>
      <img src={userHeader} alt="userHeader" className={styles['user-header']} onClick={()=>{
          if(address != null)  {
            navigate('/personalcenter')
          }
        }} />
    </div>
    </>
  )
}
