import React from 'react'
import Styles from '../Styles/ContactUs.module.css'
import { Card, Col, Row } from 'antd';
import {CarFilled ,PhoneFilled,MailFilled} from '@ant-design/icons'
function ContactUs() {
    return (
        <div>
            <div className={Styles.title}>
                <h1>Contact</h1>
            </div>
            <div className={Styles.contact}>
                <div className="site-card-wrapper">
                    <Row justify="space-around" align="middle" gutter={28}>
                        {/* <Col sm={{span:2}} md={{span:5}}  lg={{span:4}}></Col> */}
                        <Col className={Styles.card} sm={{span:2}} md={{span:5}}  lg={{span:6}} >
                            <Card title="ADDRESS" bordered={true} hoverable={true}>
                            <CarFilled />
                            Address
                            </Card>
                        </Col>
                        <Col sm={{span:2}} md={{span:5}} lg={{span:6}} >
                            <Card title="PHONE NUMBER" bordered={true} hoverable={true}>
                            <PhoneFilled />+91 9384592406
                            </Card>
                        </Col>
                        <Col sm={{span:2}} md={{span:5}} lg={{span:6}}>
                            <Card title="MAIL US @" bordered={true} hoverable={true}>
                            <MailFilled />harshinya.19cse@kongu.edu
                            </Card>
                        </Col>
                        {/* <Col sm={{span:3}} md={{span:5}}  lg={{span:4}}></Col> */}
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
