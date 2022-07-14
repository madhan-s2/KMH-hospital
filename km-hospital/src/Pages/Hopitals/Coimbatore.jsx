import React, {useState,useEffect} from 'react'
import firebase from '../../firebase.js'
import { Card, Col, Row,Button } from 'antd';
import Styles from '../../Styles/Feedback.module.css'
const { Meta } = Card;
function Coimbatore() {
    const [hospitals , setHospitals] = useState([]);
    const refThree = firebase.firestore().collection("Hospitals_Coimbatore");

    useEffect(()=>{
        function getHospitals() {
            refThree.onSnapshot((querySnapshot)=>{
                const hsptls = [];
                querySnapshot.forEach((doc)=>{
                    hsptls.push(doc.data());
                });
                console.log(hsptls);
            setHospitals(hsptls);
            });
        }  
            getHospitals();
    },[])
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Coimbatore Located Med Spaces</h1>
             <Row gutter={[90,30]}>  
                {hospitals.map((hospital)=>(
                    <div >
                   <Col align="middle" lg={{span:5 ,offset:10}}  >
                   <Card
                        className={Styles.card}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img src={hospital.img} alt="svg" width="300" height="200"/>}
                    >
                        <Meta style={{color:'red'}} title={hospital.city} description={hospital.address} />
                        <div className={Styles.btn}>
                        <Button type="link" href={hospital.path} block>Visit</Button>
                        </div>
                    </Card>     
                    </Col>  
                    </div>
             ))}       
        </Row>
        </div>
    )
}

export default Coimbatore