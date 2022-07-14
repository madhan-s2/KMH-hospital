import React,{useState,useEffect} from 'react'
import firebase from '../../firebase.js'
import Styles from '../../Styles/Symptoms.module.css'
import { Card, Col, Row,Button } from 'antd';
import DotLoader from "react-spinners/DotLoader"
import { css } from "@emotion/react";

function secondOpinion() {
    const override = css`
        display: block;  
        margin: 0 auto;
      `;


    const { Meta } = Card;
    const [docs,setDocs] = useState([]);
    const [loading, setLoading] = useState(false);
    const refOne = firebase.firestore().collection("Doc");

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },10000)
        function getDocs() {
            refOne.onSnapshot((querySnapshot)=>{
                const docs = [];
                querySnapshot.forEach((doc)=>{
                    docs.push(doc.data());
                });
                console.log(docs);
                setLoading(false);
            setDocs(docs);
            });
        }  
            getDocs();
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
        
        <h1 style={{textAlign: 'center'}}>Second Opinion</h1>

        <div className={Styles.symp}>
           <Row gutter={[90,30]}>  
                {docs.map((doc)=>(
                    <div >
                   <Col align="middle" lg={{span:2 ,offset:1}}  >
                   <Card
                        className={Styles.card}
                        hoverable
                        style={{ width: 420, height:320 }}
                    >
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="0.8" d="M0,224L40,192C80,160,160,96,240,58.7C320,21,400,11,480,53.3C560,96,640,192,720,213.3C800,235,880,181,960,160C1040,139,1120,149,1200,165.3C1280,181,1360,203,1400,213.3L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

                        <Meta className={Styles.font} style={{color:'red'}} title={doc.name} description={doc.jo} />
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

export default secondOpinion