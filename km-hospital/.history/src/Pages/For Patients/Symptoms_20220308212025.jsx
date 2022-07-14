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
                   <h1>{symp.caps}</h1>
                    </div>
             ))}       
        </Row>
    <h1>Hello</h1>
            </div>
        </div>
    )
}

export default Symptoms
