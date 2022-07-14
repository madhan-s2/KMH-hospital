import React,{useState,useEffect} from 'react'
import firebase from '../../firebase.js'
import Styles from '../../Styles/Symptoms.module.css'
import { Card, Col, Row,Button } from 'antd';
import DotLoader from "react-spinners/DotLoader"
import { css } from "@emotion/react";

function SecondOpinion() {
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
                        style={{ width: 490, height:200 }}
                        cover={<img src={doc.image} alt="svg" width="400" height="500"/>}

                    >

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

export default SecondOpinion