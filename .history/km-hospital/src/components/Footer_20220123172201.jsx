import React from 'react'
import Styles from '../Styles/Footer.module.css'
import logo from '../Images/logoWithBg.png'
import {WhatsAppOutlined,
    InstagramOutlined,
    FacebookOutlined} from '@ant-design/icons'
function Footer() {
    return (
        <div>
            <div className={Styles.footer}>
                <img className={Styles.footLogo} src={logo} alt="Logo" width={150}/>
                <div className={Styles.footerContent}>
                <h3>&copy;KM Hospital and Pharmacy</h3>
                <p>All Rights Reserved &copy;2022</p>
                <div className={Styles.maintain}>
                    <h4><strong>Maintanence</strong></h4>
                    <span>Kavinbharathi_Ananth</span><br/>
                </div>
  

                <div className={Styles.frontend}>
                    <h4><strong>UI/UX & FrontEnd</strong></h4>
                    <ul>  
                        <li>Harshiny_Arumugachamy</li>&nbsp;&nbsp;&nbsp;
                        <li>Keerthana_Ravikumar</li>
                    </ul>
                </div>

                <div className={Styles.backend}>
                <h4><strong>BackEnd & Database</strong></h4>
                    <ul>
                        <li>Marimuthu_Ponnusamy</li>&nbsp;&nbsp;&nbsp;
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
