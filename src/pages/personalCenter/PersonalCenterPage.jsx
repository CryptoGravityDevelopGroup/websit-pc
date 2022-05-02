import React from 'react';
import styles from './PersonalCenterPage.module.css'
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import emptyImgGray from '@/assets/empty-img-gray.png'

export function PersonalCenterPage() {
  return (
      <div className={styles['personal-center-wrap']}>
        <Header/>
        <div className={styles['personal-center-content-wrap']}>
          <div className={styles['nodata-wrap']}>
            <img src={emptyImgGray} alt="" />
            <div className={styles['nodata-copywriting']}>No Data</div>
          </div>
          {/* <div>
            <div className={styles['table-wrap']}>
              <div className={styles['header']}>
                <div className={styles['header-item']} style={{width: '254px'}}>Rounds</div>
                <div className={styles['header-item']} style={{width: '253px'}}>BUDGET</div>
                <div className={styles['header-item']} style={{width: '362px'}}>Tokens will be unlocked</div>
                <div className={styles['header-item']} style={{width: '195px'}}>STATUS</div>
                <div className={styles['header-item']}></div>
              </div>
              <div className={styles['table-tr']}>
                <div className={styles['table-td']} style={{width: '254px'}}>seed round</div>
                <div className={styles['table-td']} style={{width: '253px'}}>50000 GRA</div>
                <div className={styles['table-td']} style={{width: '362px'}}>50000 GRA (2023/05/20)</div>
                <div className={styles['table-td']} style={{width: '195px'}}>0 GRA</div>
                <div className={styles['table-td']}>
                  <div className={styles['redeem-btn']}>redeem</div>
                </div>
              </div>
              <div className={styles['table-tr']}>
                <div className={styles['table-td']} style={{width: '254px'}}>seed round</div>
                <div className={styles['table-td']} style={{width: '253px'}}>50000 GRA</div>
                <div className={styles['table-td']} style={{width: '362px'}}>50000 GRA (2023/05/20)</div>
                <div className={styles['table-td']} style={{width: '195px'}}>0 GRA</div>
                <div className={styles['table-td']}>
                  <div className={styles['redeem-btn']}>redeem</div>
                </div>
              </div>
            </div>
            <div className={styles['redeem-all-btn']}>Redeem all</div>
            <div className={styles['table-wrap']}>
              <div className={styles['header']}>
                <div className={styles['header-item']} style={{width: '254px'}}>Rounds</div>
                <div className={styles['header-item']} style={{width: '253px'}}>BUDGET</div>
                <div className={styles['header-item']} style={{width: '362px'}}>Tokens will be unlocked</div>
                <div className={styles['header-item']} style={{width: '195px'}}>STATUS</div>
                <div className={styles['header-item']}></div>
              </div>
              <div className={styles['table-tr']}>
                <div className={styles['table-td']} style={{width: '254px'}}>seed round</div>
                <div className={styles['table-td']} style={{width: '253px'}}>50000 GRA</div>
                <div className={styles['table-td']} style={{width: '362px'}}>50000 GRA (2023/05/20)</div>
                <div className={styles['table-td']} style={{width: '195px'}}>0 GRA</div>
                <div className={styles['table-td']}>
                  <div className={styles['redeem-btn']}>redeem</div>
                </div>
              </div>
              <div className={styles['table-tr']}>
                <div className={styles['table-td']} style={{width: '254px'}}>seed round</div>
                <div className={styles['table-td']} style={{width: '253px'}}>50000 GRA</div>
                <div className={styles['table-td']} style={{width: '362px'}}>50000 GRA (2023/05/20)</div>
                <div className={styles['table-td']} style={{width: '195px'}}>0 GRA</div>
                <div className={styles['table-td']}>
                  <div className={styles['redeem-btn']}>redeem</div>
                </div>
              </div>
            </div>
            <div className={styles['redeem-all-btn']}>Redeem all</div>
          </div> */}
        </div>
        {/* <Footer/> */}
      </div>
  )
}
