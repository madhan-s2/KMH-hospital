import React from 'react'
import Styles from '../Styles/Footer.module.css'
import { Row, Col } from 'antd';
import {WhatsAppOutlined,
    InstagramOutlined,
    FacebookOutlined} from '@ant-design/icons'
function Footer() {
    return (
        <div  >
            <div className={Styles.footer}>
              
              
                <div className={Styles.footerContent}>
                    <div sm={1}  md={6} lg={8}  className={Styles.footerTitle}>
                        <h4>All Rights Reserved &copy;2022 by KM Hospital and Pharmacy</h4>
                    </div>
               

                <div className={Styles.maintain}>
                    <h4><strong>Maintanence</strong></h4>
                    <p>Kavinbharathi_Ananth</p>
                </div>
  
                <Row className={Styles.design} gutter={[34, 18]}>
                        <Col className={Styles.frontend} sm={{ span: 5, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                        <div >
                            
                            <ul>  <h4>UI/UX & FrontEnd</h4>
                                <li>Harshiny_Arumugachamy</li>
                                <li>Keerthana_Ravikumar</li>
                            </ul>
                        </div>
                        </Col>
                        <Col className={Styles.backend} sm={{ span: 5, offset: 0 }} lg={{ span: 12, offset:0  }}>
                        <div >
                                <ul>
                                <h4><strong>BackEnd & Database</strong></h4>

                                    <li>Marimuthu_Ponnusamy</li>
                                    <li>Madhan_Selvarasu</li>
                                </ul>
                        </div>
                        </Col>
                </Row>

                



                <Row  className={Styles.social}>
                    <Col sm={{span:12}} lg={{span:24}}><WhatsAppOutlined style={{fontSize: '30px' }} /></Col>
                    <Col><InstagramOutlined style={{fontSize: '30px' }} /></Col>
                    <Col><FacebookOutlined style={{fontSize: '30px' }} /></Col>
                </Row>
            </div>
        </div>
        </div>
    )
}

export default Footer
