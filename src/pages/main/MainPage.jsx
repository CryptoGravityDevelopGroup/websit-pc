import React, { useEffect, useRef, useState } from 'react'
import styles from './MainPage.module.css';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Dialog } from '../../components/dialog';
import startBtn from '../../assets/start-btn.png'
import lottie from 'lottie-web';
import mainJson from '../../assets/lottie/cg_main.json';
import wecandoJson from '../../assets/lottie/wecando.json'
import bg_roadmap_line from '../../assets/bg_roadmap_line.png'
import roadmap_date_add from '../../assets/ic_blue_add.png'
import img_tokens from '../../assets/img_tokens.png'
import t1 from '../../assets/1.jpeg'
import t2 from '../../assets/2.jpeg'
import t3 from '../../assets/3.jpeg'
import t4 from '../../assets/4.jpeg'
import t5 from '../../assets/5.jpeg'
import t6 from '../../assets/6.jpeg'
import t7 from '../../assets/7.jpeg'

export function MainPage() {
  const couterRef = useRef(null);
  const weCanDoRef = useRef(null);
  const [curRoadmapPointIndex, setcurRoadmapPointIndex] = useState(1);
  const [curTeamsIndex, setCurTeamsIndex] = useState(3);
  const [teamAvatarListPos, setTeamAvatarListPos] = useState(0);
  const [weCanDoShowStatus, setWeCanDoShowStatus] = useState(false);
  const [tokensStatus, setTokensStatusStatus] = useState(false);
  const [teamsLeftClickStatus, setTeamsLeftClickStatus] = useState(false);
  const [teamsRightClickStatus, setTeamsRightClickStatus] = useState(false);
  const [teamsAvaterClickStatus, setTeamsAvaterClickStatus] = useState(false);
  const [startDialogStatus, setStartDialogStatus] = useState(false);
  const [roadMapStatusStatus, setRoadMapStatusStatus] = useState(false);
  const [roadPointMouseStatus, setRoadPointMouseStatus] = useState(false);
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
  useEffect(() => {
    lottie.loadAnimation({
      container: weCanDoRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: wecandoJson,
      assetsPath: '/lottie/we-can-do/images/'
    });
  }, [])
  const handleScroll = () => {
    const wenCanDoDOM = document.querySelector("#weCando");
    const tokensDOM = document.querySelector('#tokens');
    const roadmapDOM = document.querySelector('#roadmap');
    const roadmapPoint1DOM = document.querySelector('#roadmap-point-1');
    const roadmapPoint2DOM = document.querySelector('#roadmap-point-2');
    const roadmapPoint3DOM = document.querySelector('#roadmap-point-3');
    const roadmapPoint4DOM = document.querySelector('#roadmap-point-4');
    if(window.scrollY>wenCanDoDOM.offsetTop - 100) {
      setWeCanDoShowStatus(true);
    } else {
      setWeCanDoShowStatus(false);
    }

    if(window.scrollY>tokensDOM.offsetTop - 100) {
      setTokensStatusStatus(true);
    } else {
      setTokensStatusStatus(false);
    }

    if(window.scrollY>roadmapDOM.offsetTop - 100) {
      setRoadMapStatusStatus(true);
      // setTimeout(() => {
      //   roadmapPoint1DOM.style.opacity = 1;
      // }, 1000);
      // setTimeout(() => {
      //   roadmapPoint2DOM.style.opacity = 1;
      // }, 2000);
      // setTimeout(() => {
      //   roadmapPoint3DOM.style.opacity = 1;
      // }, 3000);
      // setTimeout(() => {
      //   roadmapPoint4DOM.style.opacity = 1;
      // }, 1000);
    } else {
      setRoadMapStatusStatus(false);
      // roadmapPoint1DOM.style.opacity = 0;
      // roadmapPoint2DOM.style.opacity = 0;
      // roadmapPoint3DOM.style.opacity = 0;
      // roadmapPoint4DOM.style.opacity = 0;
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])
  const handleRoadPointChange = (index) => {
    setcurRoadmapPointIndex(index);
  }
  const handleTeamsLeftClick = () => {
    if (teamsLeftClickStatus === true) return;
    setTeamsLeftClickStatus(true);
    const teamAvatarBodyListWrapDOM = document.querySelector('#teamAvatarBodyListWrap');
    teamAvatarBodyListWrapDOM.style.transition = 'all 1s';
    setCurTeamsIndex(curTeamsIndex - 1);
    if(curTeamsIndex === 0) {
      setTimeout(() => {
        teamAvatarBodyListWrapDOM.style.transition = 'all 0s';
        setCurTeamsIndex(6);
      }, 1000);
    }
    setTimeout(() => {
      setTeamsLeftClickStatus(false);
    }, 1000);
  }
  const handleTeamsRightClick = () => {
    if (teamsRightClickStatus === true) return;
    setTeamsRightClickStatus(true);
    const teamAvatarBodyListWrapDOM = document.querySelector('#teamAvatarBodyListWrap');
    teamAvatarBodyListWrapDOM.style.transition = 'all 1s';
    setCurTeamsIndex(curTeamsIndex + 1);
    if(curTeamsIndex === 6) {
      setTimeout(() => {
        teamAvatarBodyListWrapDOM.style.transition = 'all 0s';
        setCurTeamsIndex(0);
      }, 1000);
    }
    setTimeout(() => {
      setTeamsRightClickStatus(false);
    }, 1000);
  }
  const handleTeamsAvaterClick = (index) => {
    if (teamsAvaterClickStatus === true) return;
    setTeamsAvaterClickStatus(true);
    const teamAvatarBodyListWrapDOM = document.querySelector('#teamAvatarBodyListWrap');
    teamAvatarBodyListWrapDOM.style.transition = 'all 1s';
    setCurTeamsIndex(index);
    if(index <= 0) {
      setTimeout(() => {
        teamAvatarBodyListWrapDOM.style.transition = 'all 0s';
        setCurTeamsIndex(7+index);
      }, 1000);
    }
    if(index >= 6) {
      setTimeout(() => {
        teamAvatarBodyListWrapDOM.style.transition = 'all 0s';
        setCurTeamsIndex(index-7);
      }, 1000);
    }
    setTimeout(() => {
      setTeamsAvaterClickStatus(false);
    }, 1100);
  }
  const autoAddCurRoadmapPointIndex = () => {
      let index = (curRoadmapPointIndex + 1);
      console.log('temp', index);
      console.log('curRoadmapPointIndex', curRoadmapPointIndex);
  }
  useEffect(() => {
    setTeamAvatarListPos(0 - (curTeamsIndex+1)*250)
  }, [curTeamsIndex]);
  useEffect(() => {
    let timerId = setInterval(() => {
      setcurRoadmapPointIndex(curRoadmapPointIndex => {
        if(roadPointMouseStatus == false) {
          curRoadmapPointIndex = (curRoadmapPointIndex + 1)%5
          if(curRoadmapPointIndex === 0) {
            curRoadmapPointIndex = 1;
          }
        }
        return curRoadmapPointIndex;
      });
    }, 3000);
    return () => clearInterval(timerId);
  }, [roadPointMouseStatus]);
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
            <div className={styles['start-btn']}  onClick={() => {
                setStartDialogStatus(true);
              }}>
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
        <div className={styles["do-wrap"]} id='weCando'>
          <div className={styles["introduction-title-wrap"]}>
            <div className={styles["introduction-title"]}>What can CryptoGravity do?</div>
            <div className={styles["introduction-line"]}></div>
          </div>
          <div className={styles['introduction-content']}>
            <div className={[styles['to-item'], weCanDoShowStatus ? styles['to-item-active'] : ''].join(' ')}>
              <div className={styles['to-item-content']}>
                <div className={styles['to-item-title']}>
                  NFT sale
                </div>
                <div className={styles['to-item-desc']}>Create an NFT project, and publish your own project official website by configuring the website, NFT upload, and sale rule settings</div>
              </div>
            </div>
            <div className={[styles['to-item'], styles['to-item-left'], weCanDoShowStatus ? styles['to-item-left-active'] : ''].join(' ')}>
              <div className={[styles['to-item-content'], styles['to-item-content-left']].join(' ')}>
                <div className={styles['to-item-title']}>
                  DAO official website
                </div>
                <div className={styles['to-item-desc']}>Easily and quickly build your own official website of DAO to gain greater influence for your community</div>
              </div>
            </div>
            <div className={[styles['to-item'], styles['to-item-bottom'], weCanDoShowStatus ? styles['to-item-active'] : ''].join(' ')}>
              <div className={styles['to-item-content']}>
                <div className={styles['to-item-title']}>
                  Donations and Fundraising
                </div>
                <div className={styles['to-item-desc']}>In the absence of a technical team, you can build a donation and fundraising website through CryptoGravity to make investors more recognized</div>
              </div>
            </div>
            <div className={[styles['to-item'], styles['to-item-left'], styles['to-item-left-bottom'],  weCanDoShowStatus ? styles['to-item-left-active'] : ''].join(' ')}>
              <div className={[styles['to-item-content'], styles['to-item-content-left']].join(' ')}>
                <div className={styles['to-item-title']}>
                  Open platform
                </div>
                <div className={styles['to-item-desc']}>Provide developers with a complete technology platform, through middleware technology, enable developers to quickly build their own applications with minimal R&D costs</div>
              </div>
            </div>
            <div className={[styles['to-center-image'], weCanDoShowStatus ? styles['to-center-image-active'] : '' ].join(' ')} ref={weCanDoRef}></div>
          </div>
        </div>
        <div className={styles["roadmap-wrap"]} id='roadmap'>
          <div className={styles["introduction-title-wrap"]}>
            <div className={styles["introduction-title"]}>Roadmap</div>
            <div className={styles["introduction-line"]}></div>
          </div>
          <div className={styles['introduction-content']}>
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
            <div className={styles['roadmap-content']}>
              <img className={[styles['roadmap-line']].join(' ')} src={bg_roadmap_line} alt="" />
              <div id="roadmap-point-1" className={[styles['roadmap-point'], styles['point-1'], curRoadmapPointIndex === 1 ? styles['roadmap-point-active']: ''].join(' ')} onMouseEnter={()=>{
                handleRoadPointChange(1);
                console.log('setRoadPointMouseStatus');
                setRoadPointMouseStatus(true);
              }} onMouseLeave={() => {
                setRoadPointMouseStatus(false);
              }}></div>
              <div id="roadmap-point-2" className={[styles['roadmap-point'], styles['point-2'], curRoadmapPointIndex === 2 ? styles['roadmap-point-active']: ''].join(' ')} onMouseEnter={()=>{
                handleRoadPointChange(2);
                setRoadPointMouseStatus(true);
              }} onMouseLeave={() => {
                setRoadPointMouseStatus(false);
              }}></div>
              <div id="roadmap-point-3" className={[styles['roadmap-point'], styles['point-3'], curRoadmapPointIndex === 3 ? styles['roadmap-point-active']: ''].join(' ')} onMouseEnter={()=>{
                handleRoadPointChange(3);
                setRoadPointMouseStatus(true);
              }} onMouseLeave={() => {
                setRoadPointMouseStatus(false);
              }}></div>
              <div id="roadmap-point-4" className={[styles['roadmap-point'], styles['point-4'], curRoadmapPointIndex === 4 ? styles['roadmap-point-active']: ''].join(' ')} onMouseEnter={()=>{
                handleRoadPointChange(4);
                setRoadPointMouseStatus(true);
              }} onMouseLeave={() => {
                setRoadPointMouseStatus(false);
              }}></div>
            </div>
            <div className={[styles['point-detal-body-wrap']]}>
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
        </div>
        <div className={styles["tokens-wrap"]} id='tokens'>
          <div className={styles["introduction-title-wrap"]}>
            <div className={styles["introduction-title"]}>Tokens</div>
            <div className={styles["introduction-line"]}></div>
          </div>
          <div className={styles['introduction-content']}>
            <div className={[styles['tokens-tips-wrap'], tokensStatus ? styles['tokens-tips-wrap-active']: ''].join(' ')}>
              <div style={{'marginTop':'86px'}}>
                <div style={{'marginBottom': '22px'}}>We will officially release tokens soon</div>
                <div>Follow us on Twitter for the latest news</div>
              </div>
            </div>
            <img className={[styles['img-tokens'], tokensStatus ? styles['imgs-token-active'] : ''].join(' ')} src={img_tokens} alt="" />
          </div>
        </div>
        <div className={styles["teams-wrap"]} id='teams'>
          <div className={styles["introduction-title-wrap"]}>
            <div className={styles["introduction-title"]}>Teams</div>
            <div className={styles["introduction-line"]}></div>
          </div>
          <div className={styles["team-avatar-list-wrap"]}>
            <div className={styles["team-avatar-body-list-wrap"]} id="teamAvatarBodyListWrap" style={{'transform':`translate(${teamAvatarListPos}px)`, 'transition':'.3s'}}>
            <div className={[styles["team-avatar-item"], curTeamsIndex === -3 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(-3);
              }}>
                <img className={styles["team-avatar-img"]} src={t5} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === -2 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(-2);
              }}>
                <img className={styles["team-avatar-img"]} src={t6} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === -1 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(-1);
              }}>
                <img className={styles["team-avatar-img"]} src={t7} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 0 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(0);
              }}>
                <img className={styles["team-avatar-img"]} src={t1} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 1 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(1);
              }}>
                <img className={styles["team-avatar-img"]} src={t2} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 2 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(2);
              }}>
                <img className={styles["team-avatar-img"]} src={t3} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 3 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(3);
              }}>
                <img className={styles["team-avatar-img"]} src={t4} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 4 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(4);
              }}>
                <img className={styles["team-avatar-img"]} src={t5} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 5 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(5);
              }}>
                <img className={styles["team-avatar-img"]} src={t6} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 6 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(6);
              }}>
                <img className={styles["team-avatar-img"]} src={t7} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 7 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(7);
              }}>
                <img className={styles["team-avatar-img"]} src={t1} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 8 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(8);
              }}>
                <img className={styles["team-avatar-img"]} src={t2} alt="" />
              </div>
              <div className={[styles["team-avatar-item"], curTeamsIndex === 9 ? styles["team-avatar-item-active"]: ''].join(' ')} onClick={() => {
                handleTeamsAvaterClick(9);
              }}>
                <img className={styles["team-avatar-img"]} src={t3} alt="" />
              </div>
            </div>
          </div>
          <div className={styles["teams-bottom-wrap"]}>
            <div className={styles["teams-btn-left"]} onClick={() => {
              handleTeamsLeftClick();
            }}></div>
            <div className={[styles["teams-menber-desc-wrap"], curTeamsIndex === -1 ? styles["teams-menber-desc-wrap-active"]: ''].join(' ')}>
              <div className={styles["teams-menber-name"]}>Phoebe</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>Master of Engineering in NUS</div> 
                <div>Independent consultant for more than 3 years</div>
                <div>Serial entrepreneur</div>
              </div>
            </div>
            <div className={[styles["teams-menber-desc-wrap"], curTeamsIndex === 0 ? styles["teams-menber-desc-wrap-active"]: ''].join(' ')}>
              <div className={styles["teams-menber-name"]}>Leo</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>Product expert of top 2 e-commerce company</div> 
                <div>ByteDance Product Supervisor</div>
                <div>Former Head of Near Public Chain Asia Pacific NFT Art Community</div>
                <div>7 years working experience in Internet products</div>
              </div>
            </div>
            <div className={[styles["teams-menber-desc-wrap"], curTeamsIndex === 1 ? styles["teams-menber-desc-wrap-active"]: ''].join(' ')}>
              <div className={styles["teams-menber-name"]}>Marshall.MA</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>Senior engineer of a company in the top ten public chains by market value</div> 
                <div>10 years experience in telecom BOSS system</div>
              </div>
            </div>
            <div className={[styles["teams-menber-desc-wrap"], curTeamsIndex === 2 ? styles["teams-menber-desc-wrap-active"]: ''].join(' ')}>
              <div className={styles["teams-menber-name"]}>TimeLord</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>Full-stack engineer expert</div> 
                <div>TRON Front-End Architect</div>
                <div>Six-year experience in blockchain development</div>
              </div>
            </div>
            <div className={[styles["teams-menber-desc-wrap"], curTeamsIndex === 3 ? styles["teams-menber-desc-wrap-active"]: ''].join(' ')}>
              <div className={styles["teams-menber-name"]}>Robert</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>Senior researcher of top2 search engine company</div> 
                <div>Technical director of top3 e-commerce company, responsible for advertising and transaction risk control</div>
                <div>Eight-year Internet development experience</div>
                <div>Three-year contract development experience</div>
              </div>
            </div>
            <div className={[styles["teams-menber-desc-wrap"], curTeamsIndex === 4 ? styles["teams-menber-desc-wrap-active"]: ''].join(' ')}>
              <div className={styles["teams-menber-name"]}>Brough</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>Front-end architect</div> 
                <div>Advanced Development of TRC Chain Games</div>
                <div>TRON Community Leader</div>
              </div>
            </div>
            <div className={[styles["teams-menber-desc-wrap"], curTeamsIndex === 5 ? styles["teams-menber-desc-wrap-active"]: ''].join(' ')}>
              <div className={styles["teams-menber-name"]}>Wison</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>UI Designer Expert</div> 
                <div>8 years experience in mobile and pc UI design</div>
                <div>Participated in many products with millions of users</div>
              </div>
            </div>
            <div className={[styles["teams-menber-desc-wrap"], curTeamsIndex === 6 ? styles["teams-menber-desc-wrap-active"]: ''].join(' ')}>
              <div className={styles["teams-menber-name"]}>Phoebe</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>Master of Engineering in NUS</div> 
                <div>Independent consultant for more than 3 years</div>
                <div>Serial entrepreneur</div>
              </div>
            </div>
            <div className={[styles["teams-menber-desc-wrap"], curTeamsIndex === 7 ? styles["teams-menber-desc-wrap-active"]: ''].join(' ')}>
              <div className={styles["teams-menber-name"]}>Leo</div>
              <div className={styles["teams-menber-name-line"]}></div>
              <div className={styles["teams-menber-desc"]}>
                <div>Product expert of top 2 e-commerce company</div> 
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
      <Dialog dialogStatus={startDialogStatus} content='At present, we adopt an invitation system to improve the product. You can send us the project information and we will get in touch with you.<br/> Email: cryptogravitys@gmail.com'
      onClose={() => {
        setStartDialogStatus(false)
      }}/>
    </>
  )
}
