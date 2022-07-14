import React from 'react';
import { Card, Col, Row  } from 'antd';
import Styles from '../Styles/ContactUs.module.css'
import {PhoneFilled} from '@ant-design/icons'
import Img1 from '../Images/Hospitals/hsptl (16).jpeg'
function Hospitals() {
  return (<div>
      <h1 style={{textAlign:"Center"}}>Our Presence in Tamil Nadu</h1>
            <div className="site-card-wrapper">
                    <Row className={Styles.locations} justify="space-around" align="middle" gutter={28}>
                        {/* <Col sm={{span:2}} md={{span:5}}  lg={{span:4}}></Col> */}
                        <Col  sm={{span:1}} md={{span:5}}  lg={{span:5}} >
                            <Card className={Styles.card} title="CHENNAI" bordered={true} hoverable={true}>
                            St.Thomas Mount,Chromepet, Tamil Nadu <br/> <PhoneFilled />+91 9012422355
                            <img src={Img1} alt="Hospital"  widht=500} height={200}/>
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
  </div>);
}

export default Hospitals;
