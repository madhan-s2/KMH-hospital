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
                        <Col  sm={{span:1}} md={{span:5}}  lg={{span:6}} >
                            <Card className={Styles.card} title="ADDRESS" bordered={true} hoverable={true}>
                            <CarFilled />
                            Address
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:6}} >
                            <Card className={Styles.card} title="PHONE NUMBER" bordered={true} hoverable={true}>
                            <PhoneFilled />+91 9384592406
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:6}}>
                            <Card className={Styles.card} title="MAIL US @" bordered={true} hoverable={true}>
                            <MailFilled />harshinya.19cse@kongu.edu
                            </Card>
                        </Col>
                        {/* <Col sm={{span:3}} md={{span:5}}  lg={{span:4}}></Col> */}
                    </Row>
                   <br/> <hr/><br/>
                </div>
            </div>


<h1>Our Presence in Tamil Nadu</h1>
            <div className="site-card-wrapper">
                    <Row className={Styles.locations} justify="space-around" align="middle" gutter={28}>
                        {/* <Col sm={{span:2}} md={{span:5}}  lg={{span:4}}></Col> */}
                        <Col  sm={{span:1}} md={{span:5}}  lg={{span:6}} >
                            <Card className={Styles.card} title="CHENNAI" bordered={true} hoverable={true}>
                            <CarFilled />
                            Address
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:6}} >
                            <Card  className={Styles.card} title="COIMBATORE" bordered={true} hoverable={true}>
                            <PhoneFilled />+91 9384592406
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:6}}>
                            <Card className={Styles.card} title="SALEM" bordered={true} hoverable={true}>
                           Dalmia Board, Salem - Bangalore Highway
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:6}}>
                            <Card className={Styles.card} title="KANYAKUMARI" bordered={true} hoverable={true}>
                            Nagarkoil, Tamilnadu, 3/160, Main Rd 
                            </Card>
                        </Col>
                        {/* <Col sm={{span:3}} md={{span:5}}  lg={{span:4}}></Col> */}
                    </Row>
                   <br/> <hr/>
                </div>
        </div>
    )
}

export default ContactUs
