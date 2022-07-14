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
                    <h4>Maintanence</h4>
                    <p>Kavinbharathi_Ananth</p>
                </div>
  
                <Row className={Styles.design} gutter={[34, 18]}>
                    <Col sm={{ span: 5, offset: 0 }} lg={{ span: 6, offset:0  }}> </Col>
                        <Col className={Styles.frontend} sm={{ span: 5, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                        <div >
                            
                              <h4>UI/UX & FrontEnd</h4>
                              <p>Harshiny_Arumugachamy</p>  
                             <p>Keerthana_Ravikumar </p>   
                    
                        </div>
                        </Col>
                        <Col className={Styles.backend} sm={{ span: 5, offset: 0 }} lg={{ span: 6, offset:0  }}>
                        <div >
                                <ul>
                                <h4><strong>BackEnd & Database</strong></h4>

                                    <p>Marimuthu_Ponnusamy</p>
                                    <p>Madhan_Selvarasu</p>
                                </ul>
                        </div>
                        </Col>
                        <Col sm={{ span: 5, offset: 0 }} lg={{ span: 6, offset:0  }}> </Col>
                </Row>

                
<hr/>


                <Row  className={Styles.social}>
                    <Col sm={{span:2}} lg={{span:8}}><WhatsAppOutlined style={{fontSize: '30px' }} /></Col>
                    <Col sm={{span:2}} lg={{span:8}}><InstagramOutlined style={{fontSize: '30px' }} /></Col>
                    <Col sm={{span:2}} lg={{span:8}}><FacebookOutlined style={{fontSize: '30px' }} /></Col>
                </Row>
            </div>
        </div>
        </div>
    )
}

export default Footer
