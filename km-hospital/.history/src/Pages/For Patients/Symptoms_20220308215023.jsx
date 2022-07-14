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
                        <Meta style={{color:'red'}} title={symp.caps} description={symp.desc} />
                        <div className={Styles.btn}>
                        <Button type="link" href = {symp.path} block>Look</Button>
                        </div>
                    </Card>     
                    </Col>  
                    </div>
             ))}       
        </Row>
            </div>
        </div>
    )
}

export default Symptoms
