import React, { useEffect, useRef } from 'react'
import styles from './MainPage.module.css';
import { Header } from '../../components/header';
import startBtn from '../../assets/start-btn.png'
import img_cwd_mid from '../../assets/img_cwd_mid.png'
import lottie from 'lottie-web';
import mainJson from '../../assets/lottie/cg_main.json';

export function MainPage() {
  const couterRef = useRef(null);
  const introductionList = [
    {
      logo: '/ic_intro_1.png',
      title: 'Website Building',
      des: 'Through simple page interaction, you can build your own project website and deploy domain name'
    },{
      logo: '/ic_intro_2.png',
      title: 'Smart Contract',
      des: 'One-stop smart contract deployment and setup, easy to realize without code'
    },{
      logo: '/ic_intro_3.png',
      title: 'Digital Asset Sale',
      des: 'Integrate digital asset types such as NFT pictures, music, and videos, and store and host many different asset types'
    },{
      logo: '/ic_intro_4.png',
      title: 'Numerous Gameplay',
      des: 'Provide many mainstream sale modes, such as pre-sale, whitelist system, blind box sale'
    },{
      logo: '/ic_intro_5.png',
      title: 'Database',
      des: 'Provide project parties with complete project data models and data storage function, and help them to better understand their project by visualizing the data'
    },{
      logo: '/ic_intro_6.png',
      title: 'Risk Control',
      des: 'A systematic risk control security solution to ensure the stable operation of the project and avoid being attacked and intruded by scientists'
    }
  ]
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
        <div className={styles["introduction-wrap"]}>
          <div className={styles["introduction-title-wrap"]}>
            <div className={styles["introduction-title"]}>Introduction</div>
            <div className={styles["introduction-line"]}></div>
          </div>
          <div className={styles['introduction-content']}>
            {
              introductionList.map( item => {
                return (
                  <div className={styles['introduction-item']}>
                    <img className={styles['introduction-item-img']} src={item.logo} alt="" />
                    <div className={styles['introduction-item-title']}>{item.title}</div>
                    <div className={styles['introduction-item-desc']}>{item.des}</div>
                  </div>     
                )
              })
            }
          </div>
        </div>
        <div className={styles["do-wrap"]}>
          <div className={styles["introduction-title-wrap"]}>
            <div className={styles["introduction-title"]}>What can CryptoGravity do?</div>
            <div className={styles["introduction-line"]}></div>
          </div>
          <div className={styles['introduction-content']}>
            <div className={styles['to-item']}>
              <div className={styles['to-item-content']}>
                <div className={styles['to-item-title']}>
                  NFT sale
                </div>
                <div className={styles['to-item-desc']}>Create an NFT project, and publish your own project official website by configuring the website, NFT upload, and sale rule settings</div>
              </div>
            </div>
            <div className={[styles['to-item'], styles['to-item-left']].join(' ')}>
              <div className={[styles['to-item-content'], styles['to-item-content-left']].join(' ')}>
                <div className={styles['to-item-title']}>
                  DAO official website
                </div>
                <div className={styles['to-item-desc']}>Easily and quickly build your own official website of DAO to gain greater influence for your community</div>
              </div>
            </div>
            <div className={styles['to-item']}>
              <div className={styles['to-item-content']}>
                <div className={styles['to-item-title']}>
                  Donations and Fundraising
                </div>
                <div className={styles['to-item-desc']}>In the absence of a technical team, you can build a donation and fundraising website through CryptoGravity to make investors more recognized</div>
              </div>
            </div>
            <div className={[styles['to-item'], styles['to-item-left']].join(' ')}>
              <div className={[styles['to-item-content'], styles['to-item-content-left']].join(' ')}>
                <div className={styles['to-item-title']}>
                  Open platform
                </div>
                <div className={styles['to-item-desc']}>Provide developers with a complete technology platform, through middleware technology, enable developers to quickly build their own applications with minimal R&D costs</div>
              </div>
            </div>
            <img className={styles['to-center-image']} src={img_cwd_mid} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
