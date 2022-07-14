import React from 'react'
import Styles from '../Styles/Footer.module.css'
import {WhatsAppOutlined,
    InstagramOutlined,
    FacebookOutlined} from '@ant-design/icons'
function Footer() {
    return (
        <div>
            <div className={Styles.footer}>
              
              
                <div className={Styles.footerContent}>
                    <div className={Styles.footerTitle}>
                        <h3>&copy;KM Hospital and Pharmacy</h3>
                        <span>All Rights Reserved &copy;2022</span>
                    </div>
               

                <div className={Styles.maintain}>
                    <h4><strong>Maintanence</strong></h4>
                    <span>Kavinbharathi_Ananth</span>
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
