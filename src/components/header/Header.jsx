import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import userHeader from '../../assets/user-header.png'
import imgDefaultUser from '../../assets/img_default_user.png'
import { useNavigate } from 'react-router-dom';
import { getWeb3 } from "@/utils/web3";

export function Header() {
  const navigate = useNavigate();
  const [curPageKey, setCurPageKey] = useState('Home');
  const [address, setAddress] = useState(null);
  const navigation = (key) => {
    const PageId = document.querySelector("#" + key);
    setCurPageKey(key);
    window.scrollTo({
      top: PageId.offsetTop - 80,
      behavior: "smooth",
    });
  }
  const connectWallte = async() => {
    const res = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    let tmpeAddress = res[0].substr(0, 8) + "..." + res[0].substr(-4, 4);
    setAddress(tmpeAddress);
    window.sessionStorage.setItem("account", res[0]);
  }
  const handleScroll = () => {
    const homeDOM = document.querySelector("#home");
    const introductionDOM = document.querySelector("#introduction");
    const roadmapDOM = document.querySelector('#roadmap');
    const tokensDOM = document.querySelector('#tokens');
    const teamsDOM = document.querySelector('#teams');
    if(!homeDOM) return;
    if(window.scrollY>homeDOM.offsetTop - 180) {
      setCurPageKey('home')
    }
    if(window.scrollY>introductionDOM.offsetTop - 180) {
      setCurPageKey('introduction')
    }
    if(window.scrollY>roadmapDOM.offsetTop - 180) {
      setCurPageKey('roadmap')
    }
    if(window.scrollY>tokensDOM.offsetTop - 180) {
      setCurPageKey('tokens')
    }
    if(window.scrollY>teamsDOM.offsetTop - 180) {
      setCurPageKey('teams')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])
  useEffect(() => {
    connectWallte();
    handleScroll();
  })
  return (
    <>
    <div style={{height:'80px'}}></div>
    <div className={styles['app-header']}>
      <img src={logo} alt="logo" className={styles['app-logo']}/>
      <div className={styles['main-menu']}>
        <div className={[styles['menu-item'], curPageKey === 'home' ? styles['menu-item-active'] : ''].join(' ')} onClick={()=>{
          navigate('/')
          navigation('home')
        }}>Home</div>
        <div className={[styles['menu-item'], curPageKey === 'introduction' ? styles['menu-item-active'] : ''].join(' ')} onClick={()=>{
          navigate('/')
          navigation('introduction')
        }}>Introduction</div>
        <div className={[styles['menu-item'], curPageKey === 'roadmap' ? styles['menu-item-active'] : ''].join(' ')} onClick={()=>{
          navigate('/')
          navigation('roadmap')
        }}>Roadmap</div>
        <div className={[styles['menu-item'], curPageKey === 'tokens' ? styles['menu-item-active'] : ''].join(' ')} onClick={()=>{
          navigate('/')
          navigation('tokens')
        }}>Tokens</div>
        <div className={[styles['menu-item'], curPageKey === 'teams' ? styles['menu-item-active'] : ''].join(' ')} onClick={()=>{
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
      <img src={address ? imgDefaultUser : userHeader } alt="userHeader" className={styles['user-header']} onClick={()=>{
          if(address != null)  {
            navigate('/personalcenter')
          }
        }} />
    </div>
    </>
  )
}
