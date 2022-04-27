import React, { useEffect, useRef, useState } from 'react'
import styles from './MainPage.module.css';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import startBtn from '../../assets/start-btn.png'
import img_cwd_mid from '../../assets/img_cwd_mid.png'
import lottie from 'lottie-web';
import mainJson from '../../assets/lottie/cg_main.json';
import bg_roadmap_line from '../../assets/bg_roadmap_line.png'
import roadmap_date_add from '../../assets/ic_blue_add.png'
import img_tokens from '../../assets/img_tokens.png'
import bg_team_avatar from '../../assets/bg_team_avatar.png'

export function MainPage() {
  const couterRef = useRef(null);
  const [curRoadmapPointIndex, setcurRoadmapPointIndex] = useState(1);
  const [curTeamsIndex, setCurTeamsIndex] = useState(2);
  const [teamAvatarListPos, setTeamAvatarListPos] = useState(0);
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
  const handleRoadPointChange = (index) => {
    setcurRoadmapPointIndex(index);
  }
  const handleTeamsLeftClick = () => {
    if(curTeamsIndex - 1 >= 0) {
      setCurTeamsIndex(curTeamsIndex - 1)
    }
  }
  const handleTeamsRightClick = () => {
    if(curTeamsIndex + 1 <= 4) {
      setCurTeamsIndex(curTeamsIndex + 1)
    }
  }
  useEffect(() => {
    setTeamAvatarListPos(0 - (curTeamsIndex-2)*250)
  }, [curTeamsIndex]);
  return (
    <>
      <Header/>
      <div className={styles["page-content"]}>
        <div className={styles["cryptoGravity-wrap"]} id='home'>
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
        <div className={styles["introduction-wrap"]} id='introduction'>
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
        <div className={styles["roadmap-wrap"]} id='roadmap'>
          <div className={styles["introduction-title-wrap"]}>
            <div className={styles["introduction-title"]}>Roadmap</div>
            <div className={styles["introduction-line"]}></div>
          </div>
          <div className={styles['introduction-content']}>
            <div className={styles['roadmap-content']}>
              <img className={styles['roadmap-line']} src={bg_roadmap_line} alt="" />
              <div className={[styles['roadmap-point'], styles['point-1'], curRoadmapPointIndex === 1 ? styles['roadmap-point-active']: ''].join(' ')} onMouseEnter={()=>{
                handleRoadPointChange(1);
              }}></div>
              <div className={[styles['roadmap-point'], styles['point-2'], curRoadmapPointIndex === 2 ? styles['roadmap-point-active']: ''].join(' ')} onMouseEnter={()=>{
                handleRoadPointChange(2);
              }}></div>
              <div className={[styles['roadmap-point'], styles['point-3'], curRoadmapPointIndex === 3 ? styles['roadmap-point-active']: ''].join(' ')} onMouseEnter={()=>{
                handleRoadPointChange(3);
              }}></div>
              <div className={[styles['roadmap-point'], styles['point-4'], curRoadmapPointIndex === 4 ? styles['roadmap-point-active']: ''].join(' ')} onMouseEnter={()=>{
                handleRoadPointChange(4);
              }}></div>
            </div>
            <div className={styles['roadmap-date-wrap']}>
              <div className={[styles['roadmap-date-item'], styles['roadmap-date-2022Q3']].join(' ')}>
                Q3 , 2022 <img className={styles['roadmap_date_add']} src={roadmap_date_add} alt="" />
              </div>
              <div className={[styles['roadmap-date-item'], styles['roadmap-date-2022Q4']].join(' ')}>
                Q4 , 2022 <img className={styles['roadmap_date_add']} src={roadmap_date_add} alt="" />
              </div>
              <div className={[styles['roadmap-date-item'], styles['roadmap-date-2023Q1']].join(' ')}>
                Q1 , 2023 <img className={styles['roadmap_date_add']} src={roadmap_date_add} alt="" />
              </div>
              <div className={[styles['roadmap-date-item'], styles['roadmap-date-2023Q2']].join(' ')}>
                Q2 , 2023 <img className={styles['roadmap_date_add']} src={roadmap_date_add} alt="" />
              </div>
            </div>
            <div className={[styles['point-detal-wrap'], styles['point-detal-2022Q3'], curRoadmapPointIndex === 1 ? styles['point-detal-active']: ''].join(' ')}>
              <div className={styles['point-detal-triangle-wrap']}></div>
              <ul>
                <li>The main network of CryptoGracity is launched, supporting website construction, contract deployment, and NFT asset sales. </li>
                <li>Incubate more than 10 high-quality NFT projects. </li>
                <li>Continuous research and development to increase platform security and stability.</li>
              </ul>
            </div>
            <div className={[styles['point-detal-wrap'], styles['point-detal-2022Q4'], curRoadmapPointIndex === 2 ? styles['point-detal-active']: ''].join(' ')}>
              <div className={styles['point-detal-triangle-wrap']}></div>
              <ul>
                <li>Upgrade cloud service capabilities in website construction, smart contracts, and risk control security.</li>
                <li>Establish an intelligent database, and provide the project party with intelligent data analysis capabilities through a visual data model.</li>
                <li>Expand to explore digital asset types such as music and video.</li>
              </ul>
            </div>
            <div className={[styles['point-detal-wrap'], styles['point-detal-2023Q1'], curRoadmapPointIndex === 3 ? styles['point-detal-active']: ''].join(' ')}>
              <div className={[styles['point-detal-triangle-wrap'], styles['point-detal-triangle-right-wrap']].join(' ')}></div>
              <ul>
                <li>Successfully hatched more than 1,000 high-quality projects, and established extensive and close cooperation with artists, studios, IPs, and project parties around the world.</li>
                <li>Become a first-class web3 intelligent application cloud service platform.</li>
                <li>Lead the innovation of digital assets in the industry and explore more possibilities.</li>
                <li>Hold offline exhibitions</li>
              </ul>
            </div>
            <div className={[styles['point-detal-wrap'], styles['point-detal-2023Q2'],  curRoadmapPointIndex === 4 ? styles['point-detal-active']: ''].join(' ')}>
            <div className={[styles['point-detal-triangle-wrap'], styles['point-detal-triangle-right-wrap']].join(' ')}></div>
              <ul>
                <li>Open platform project establishment and launch. </li>
                <li>Build an intelligent database and provide the project party with intelligent data analysis capabilities through a visual data models.</li>
                <li>Expand to explore digital asset types such as music and video.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles["tokens-wrap"]} id='tokens'>
          <div className={styles["introduction-title-wrap"]}>
            <div className={styles["introduction-title"]}>Tokens</div>
            <div className={styles["introduction-line"]}></div>
          </div>
          <div className={styles['introduction-content']}>
            <div className={styles['tokens-tips-wrap']}>
              <div style={{'marginTop':'86px'}}>
                <div style={{'marginBottom': '22px'}}>We will officially release tokens soon</div>
                <div>Follow us on Twitter for the latest news</div>
              </div>
            </div>
            <img className={styles['img-tokens']} src={img_tokens} alt="" />
          </div>
        </div>
        <div className={styles["teams-wrap"]} id='teams'>
          <div className={styles["introduction-title-wrap"]}>
            <div className={styles["introduction-title"]}>Teams</div>
            <div className={styles["introduction-line"]}></div>
          </div>
          <div className={styles["team-avatar-list-wrap"]}>
            <div className={styles["team-avatar-body-list-wrap"]} style={{'transform':`translate(${teamAvatarListPos}px)`, 'transition':'.3s'}}>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 0 ? styles["team-avatar-item-active"]: ''].join(' ')}>
                <img className={styles["team-avatar-img"]} src={bg_team_avatar} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 1 ? styles["team-avatar-item-active"]: ''].join(' ')}>
                <img className={styles["team-avatar-img"]} src={bg_team_avatar} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 2 ? styles["team-avatar-item-active"]: ''].join(' ')}>
                <img className={styles["team-avatar-img"]} src={bg_team_avatar} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 3 ? styles["team-avatar-item-active"]: ''].join(' ')}>
                <img className={styles["team-avatar-img"]} src={bg_team_avatar} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 4 ? styles["team-avatar-item-active"]: ''].join(' ')}>
                <img className={styles["team-avatar-img"]} src={bg_team_avatar} alt="" />
              </div>
            </div>
          </div>
          <div className={styles["teams-bottom-wrap"]}>
            <div className={styles["teams-btn-left"]} onClick={() => {
              handleTeamsLeftClick();
            }}></div>
            <div className={styles["teams-menber-desc-wrap"]}>
              <div className={styles["teams-menber-name"]}>Leo</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>Alibaba Product Expert</div> 
                <div>ByteDance Product Supervisor</div>
                <div>Former Head of Near Public Chain Asia Pacific NFT Art Community</div>
                <div>7 years working experience in Internet products</div>
              </div>
            </div>
            <div className={styles["teams-btn-right"]} onClick={() => {
              handleTeamsRightClick();
            }}></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
