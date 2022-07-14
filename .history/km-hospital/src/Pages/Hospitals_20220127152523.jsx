import React from 'react';
import { Card, Col, Row  } from 'antd';
import Styles from '../Styles/ContactUs.module.css'
import {PhoneFilled} from '@ant-design/icons'
import Img1 from '../Images/Hospitals/hsptl (16).jpeg'
import Img2 from '../Images/Hospitals/hsptl (13).jpeg'
import Img3 from '../Images/Hospitals/hsptl (14).jpeg'
import Img4 from '../Images/Hospitals/hsptl (15).jpeg'
function Hospitals() {
  return (<div>
      <h1 style={{textAlign:"Center"}}>Our Presence in Tamil Nadu</h1>
            <div className="site-card-wrapper">
                    <Row className={Styles.locations} justify="space-around" align="middle" gutter={28}>
                        {/* <Col sm={{span:2}} md={{span:5}}  lg={{span:4}}></Col> */}
                        <Col  sm={{span:1}} md={{span:5}}  lg={{span:5}} >
                            <Card className={Styles.card} style={{backgroundColor:'whitesmoke', border:'1px solid black'}} title="CHENNAI" bordered={true} hoverable={true}>
                            <img src={Img1} alt="Hospital"  width={240} height={200}/>
                            St.Thomas Mount,Chromepet, Tamil Nadu <br/> <PhoneFilled />+91 9012422355
                            <Button type="link" href='/chennai' block>Visit</Button>
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:5}} >
                            <Card  className={Styles.card} style={{backgroundColor:'whitesmoke', border:'1px solid black'}} title="COIMBATORE" bordered={true} hoverable={true}>
                            <img src={Img2} alt="Hospital"  width={240} height={200}/>
                           11th Street, Opp:, E Power House Rd,Near KFC <br/> <PhoneFilled />+91 9012422354
                           <Button type="link" href='/coimbatore' block>Visit</Button>
                         </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:5}}>
                            <Card className={Styles.card} style={{backgroundColor:'whitesmoke', border:'1px solid black'}} title="SALEM" bordered={true} hoverable={true}>
                            <img src={Img3} alt="Hospital"  width={240} height={200}/>
                           Dalmia Board- Bangalore Highway, Salem  <br/> <PhoneFilled />+91 9012422353
                           <Button type="link" href='/salem' block>Visit</Button>
                            </Card>
                        </Col>
                        <Col sm={{span:1}} md={{span:5}} lg={{span:5}}>
                            <Card className={Styles.card} style={{backgroundColor:'whitesmoke', border:'1px solid black'}} title="KANYAKUMARI" bordered={true} hoverable={true}>
                            <img src={Img4} alt="Hospital"  width={240} height={200}/>
                             3/160, Main Rd, Bharathi nagar,Nagarkoil, Tamilnadu  <br/> <PhoneFilled />+91 9012422352
                             <Button type="link" href='/kanyakumari' block>Visit</Button>
                           </Card>
                        </Col>
                        {/* <Col sm={{span:3}} md={{span:5}}  lg={{span:4}}></Col> */}
                    </Row>
              <br/>
                </div>
  </div>);
}

export default Hospitals;
