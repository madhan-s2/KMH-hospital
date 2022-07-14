import React from 'react'
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
    const [desc,setDesc] = useState([]);
    const [loading, setLoading] = useState(false);
    const refOne = firebase.firestore().collection("Doc");

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
            setDesc(symptoms);
            });
        }  
            getSymps();
    },[])

  return (
    <div>
        
        <h1 style={{textAlign: 'center'}}>Second Opinion</h1>

    </div>
  )
}

export default secondOpinion