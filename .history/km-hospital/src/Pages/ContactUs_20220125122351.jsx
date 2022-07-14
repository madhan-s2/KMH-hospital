import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import Styles from '../Styles/ContactUs.module.css'
import { Card, Col, Row,Form, Input, Button  } from 'antd';
import {CarFilled ,PhoneFilled,MailFilled} from '@ant-design/icons'
import TamilNadu from '../Images/TN image.png'
function ContactUs() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
   
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div>

             <HelmetProvider>
                    <Helmet>
                        <title>KM Hospital | Contact Us</title>
                    </Helmet>
             </HelmetProvider>
            <div className={Styles.title}>
                <h1>Contact</h1>
            </div>


<Row justify="space-around" align="middle" gutter={8}>
        <Col span={12}>
        <Form className={Styles.form}
                    name="basic"
                    labelCol={{
                        span: 9,
                    }}
                    wrapperCol={{
                        span: 6,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone number"
                        name="mob_num"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Number!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        align="middle"
                        wrapperCol={{
                            span: 14, offset: 10
                        }}
                    >
                        <Button  className={Styles.btn} type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                       
                  
                    </Form>


        
        </Col>
        <Col span={5}>
        <img  src={TamilNadu} alt="TN image" width={150} height={190} />
        </Col>
</Row>
               


    <h1 style={{textAlign:"Center"}}>Main Office Communication</h1>
            <div className={Styles.contact}>
                <div className="site-card-wrapper">
                    <Row justify="space-around" align="middle" gutter={28}>
                        {/* <Col sm={{span:2}} md={{span:5}}  lg={{span:4}}></Col> */}
                        <Col  sm={{span:1}} md={{span:5}}  lg={{span:6}} >
                            <Card className={Styles.card} title="VISIT US AT" bordered={true} hoverable={true}>
                            <CarFilled />
                            KM Corporate Office,<br/>
Vivekanandha Street ,Plot no. 6 & 7, Survey no. 84 Madhapur Near Raheja Mindspace, Chennai, Tamilnadu 600028
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:6}} >
                            <Card className={Styles.card} title="CALL US BY" bordered={true} hoverable={true}>
                            <PhoneFilled />04321 222289<br/>
                            <PhoneFilled />04321 222290<br/>
                            <PhoneFilled />+91 9384592406<br/>
                            <PhoneFilled />+91 9384592426<br/>
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:6}}>
                            <Card className={Styles.card} title="MAIL US @" bordered={true} hoverable={true}>
                            <MailFilled />kavinbrti.doc@kmhptl.com<br/>
                            <MailFilled />harshinya.doc@kmhptl.com<br/>
                            <MailFilled />keerthanar.doc@kmhptl.com<br/>
                            <MailFilled />madhans.doc@kmhptl.com<br/>
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
                        <Col  sm={{span:1}} md={{span:5}}  lg={{span:5}} >
                            <Card className={Styles.card} title="CHENNAI" bordered={true} hoverable={true}>
                            St.Thomas Mount,Chromepet, Tamil Nadu <br/> <PhoneFilled />+91 9012422355
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:5}} >
                            <Card  className={Styles.card} title="COIMBATORE" bordered={true} hoverable={true}>
                           11th Street, Opp:, E Power House Rd,Near KFC <br/> <PhoneFilled />+91 9012422354
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:5}}>
                            <Card className={Styles.card} title="SALEM" bordered={true} hoverable={true}>
                           Dalmia Board- Bangalore Highway, Salem  <br/> <PhoneFilled />+91 9012422353
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:5}}>
                            <Card className={Styles.card} title="KANYAKUMARI" bordered={true} hoverable={true}>
                             3/160, Main Rd, Bharathi nagar,Nagarkoil, Tamilnadu  <br/> <PhoneFilled />+91 9012422352
                            </Card>
                        </Col>
                        {/* <Col sm={{span:3}} md={{span:5}}  lg={{span:4}}></Col> */}
                    </Row>
              <br/>
                </div>
        </div>
    )
}

export default ContactUs
