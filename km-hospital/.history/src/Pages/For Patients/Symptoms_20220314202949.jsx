import React, {useState,useEffect} from 'react'
import firebase from '../../firebase.js'
import Styles from '../../Styles/Symptoms.module.css'
import { Card, Col, Row,Button } from 'antd';

function Symptoms() {
    const { Meta } = Card;
    const [symps,setSymps] = useState([]);
    const [loading, setLoading] = useState(false);
    const refOne = firebase.firestore().collection("Symptoms");

   

    useEffect(()=>{
        setLoading(true);
            setTimeout(()=>{
                setLoading(false)
            },10000)

        function getSymps() {
            refOne.onSnapshot((querySnapshot)=>{
                const symptoms = [];
                querySnapshot.forEach((doc)=>{
                    symptoms.push(doc.data());
                });
                console.log(symptoms);
                setLoading(false);
            setSymps(symptoms);
            });
            
        }  
            getSymps();
    },[])


    return (
        <div>
             {
              loading ? 
                <DotLoader
                    color='#1890ff' 
                    loading={loading}
                    css = {override}
                    size={60} />

                    :
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.8" d="M0,32L80,74.7C160,117,320,203,480,202.7C640,203,800,117,960,96C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                            </Card>     
                            </Col>  
                            <br/>
                            </div>
                    ))}       
                </Row>
                    </div>
                </div>
            }
        </div>
    )
}

export default Symptoms
