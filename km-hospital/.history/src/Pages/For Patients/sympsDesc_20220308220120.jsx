import React, {useState,useEffect} from 'react'
import firebase from '../../firebase.js'
import Styles from '../../Styles/Symptoms.module.css'
import { Card, Col, Row,Button } from 'antd';

function Alpha() {
    const { Meta } = Card;
    const [desc,setDesc] = useState([]);
    const refOne = firebase.firestore().collection("symptomsAlpha");

    useEffect(()=>{
        function getSymps() {
            refOne.onSnapshot((querySnapshot)=>{
                const symptoms = [];
                querySnapshot.forEach((doc)=>{
                    symptoms.push(doc.data());
                });
                console.log(symptoms);
            setDesc(symptoms);
            });
        }  
            getSymps();
    },[])


    return (
        <div>
           <h1 style={{textAlign: 'center'}}>Symptoms</h1>
           <div className={Styles.symp}>
           <Row gutter={[90,30]}>  
                {desc.map((desc)=>(
                    <div >
                   <Col align="middle" lg={{span:2 ,offset:1}}  >
                   <Card
                        className={Styles.card}
                        hoverable
                        style={{ width: 440, height:250 }}
                    >
                        <Meta className={Styles.font} style={{color:'red'}} title={desc.title} description={desc.desc} />
                        
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

export default Alpha
