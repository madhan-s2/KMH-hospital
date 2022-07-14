import React from 'react'
import Styles from '../Styles/Footer.module.css'
import {WhatsAppOutlined,
    InstagramOutlined,
    FacebookOutlined} from '@ant-design/icons'
import { Row, Col } from 'antd';
function Footer() {
    return (
        <div>
            <div className={Styles.footer}>
                <div className={Styles.footerContent}>
                    <Row gutter={[16, 16]}>
                        <Col  xl = {1} sm={1}  md={6}   className={Styles.footerTitle}>
                            <div>
                                <h4>&copy;KM Hospital and Pharmacy</h4>
                                <p>All Rights Reserved &copy;2022</p>
                            </div>
                        </Col>
                    </Row>
                </div>
               
                <Row>
                    <Col xs={24}>
                        <div className={Styles.maintain}>
                            <h4><strong>Maintanence</strong></h4>
                            <p>Kavinbharathi_Ananth</p>
                        </div>
                    </Col>
                </Row>
  
                <Row>
                    <Col xs={24} md={6}/>
                    <Col xs={24} md={6}>
                        <div>
                            <h4  className={Styles.headDecoration}><strong>UI/UX & FrontEnd</strong></h4>
                            <div className={Styles.decoration}>  
                                <p>Harshiny_Arumugachamy</p>
                                <p>Keerthana_Ravikumar</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div>
                        <h4  className={Styles.headDecoration}><strong>BackEnd & Database</strong></h4>
                            <div className={Styles.decoration}>
                                <p>Marimuthu_Ponnusamy</p>
                                <p>Madhan_Selvarasu</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={6}/>
                </Row>
                <Row>
                    <ul className={Styles.social}>
                        <li><WhatsAppOutlined style={{fontSize: '30px' }} /></li>
                        <li><InstagramOutlined style={{fontSize: '30px' }} /></li>
                        <li><FacebookOutlined style={{fontSize: '30px' }} /></li>
                    </ul>
                </Row>
            </div>
        </div>
    )
}

export default Footer
