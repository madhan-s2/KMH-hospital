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
                        style={{ width: 420, height:250 }}
                    >
                        <Meta className={Styles.font} style={{color:'red'}} title={desc.title} description={desc.desc} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="0.8" d="M0,32L80,74.7C160,117,320,203,480,202.7C640,203,800,117,960,96C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
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
