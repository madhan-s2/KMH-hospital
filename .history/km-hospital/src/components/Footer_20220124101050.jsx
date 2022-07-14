import React from 'react'
import Styles from '../Styles/Footer.module.css'
import {WhatsAppOutlined,
    InstagramOutlined,
    FacebookOutlined} from '@ant-design/icons'
function Footer() {
    return (
        <div  xs={2} sm={4} md={6} lg={8} xl={10}>
            <div className={Styles.footer}>
              
              
                <div className={Styles.footerContent}>
                    <div className={Styles.footerTitle}>
                        <h4>All Rights Reserved &copy;2022 by KM Hospital and Pharmacy</h4>
                    </div>
               

                <div className={Styles.maintain}>
                    <h4><strong>Maintanence</strong></h4>
                    <p>Kavinbharathi_Ananth</p>
                </div>
  

                <div className={Styles.frontend}>
                    <h4><strong>UI/UX & FrontEnd</strong></h4>
                    <ul>  
                        <li>Harshiny_Arumugachamy</li>
                        <li>Keerthana_Ravikumar</li>
                    </ul>
                </div>

                <div className={Styles.backend}>
                <h4><strong>BackEnd & Database</strong></h4>
                    <ul>
                        <li>Marimuthu_Ponnusamy</li>
                        <li>Madhan_Selvarasu</li>
                    </ul>
                </div>

                <ul className={Styles.social}>
                    <li><WhatsAppOutlined style={{fontSize: '30px' }} /></li>
                    <li><InstagramOutlined style={{fontSize: '30px' }} /></li>
                    <li><FacebookOutlined style={{fontSize: '30px' }} /></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Footer
