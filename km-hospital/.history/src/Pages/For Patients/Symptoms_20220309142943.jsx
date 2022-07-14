import React, {useState,useEffect} from 'react'
import firebase from '../../firebase.js'
import Styles from '../../Styles/Symptoms.module.css'
import { Card, Col, Row,Button } from 'antd';

function Symptoms() {
    const { Meta } = Card;
    const [symps,setSymps] = useState([]);
    const refOne = firebase.firestore().collection("Symptoms");

    useEffect(()=>{
        function getSymps() {
            refOne.onSnapshot((querySnapshot)=>{
                const symptoms = [];
                querySnapshot.forEach((doc)=>{
                    symptoms.push(doc.data());
                });
                console.log(symptoms);
            setSymps(symptoms);
            });
        }  
            getSymps();
    },[])


    return (
        <div>
           <h1 style={{textAlign: 'center'}}>Symptoms</h1>
           <div className={Styles.symp}>
           <Row gutter={[90,30]}>  
                {symps.map((symp)=>(
                    <div >
                   <Col align="middle" lg={{span:5 ,offset:10}}  >
                   <Card
                        className={Styles.card}
                        hoverable
                        style={{ width: 240 }}
                    >
                        <Meta className={Styles.font} style={{color:'red'}} title={symp.caps} description={symp.desc} />
                        <div className={Styles.btn}>
                        <Button type="link" href = {symp.path} block>Look</Button>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L34.3,74.7C68.6,117,137,203,206,229.3C274.3,256,343,224,411,186.7C480,149,549,107,617,106.7C685.7,107,754,149,823,186.7C891.4,224,960,256,1029,261.3C1097.1,267,1166,245,1234,250.7C1302.9,256,1371,288,1406,304L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                    </Card>     
                    </Col>  
                    <br/>
                    </div>
             ))}       
        </Row>
            </div>
        </div>
    )
}

export default Symptoms
