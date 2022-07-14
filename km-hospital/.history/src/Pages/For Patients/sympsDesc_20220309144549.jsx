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
                        style={{ width: 420, height:350 }}
                    >
                        <Meta className={Styles.font} style={{color:'red'}} title={desc.title} description={desc.desc} />
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 85.48325358851676,240.6602870813397 170.96650717703352,281.3205741626794 267,266 C 363.0334928229665,250.6794258373206 469.61722488038276,179.377990430622 576,164 C 682.3827751196172,148.622009569378 788.5645933014355,189.16746411483254 880,189 C 971.4354066985645,188.83253588516746 1048.1244019138755,147.95215311004785 1139,143 C 1229.8755980861245,138.04784688995215 1334.9377990430621,169.02392344497608 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 108.19138755980862,398.4019138755981 216.38277511961724,396.80382775119614 325,391 C 433.61722488038276,385.19617224880386 542.6602870813397,375.1866028708134 627,370 C 711.3397129186603,364.8133971291866 770.9760765550241,364.44976076555025 849,377 C 927.0239234449759,389.55023923444975 1023.4354066985645,415.0143540669857 1125,421 C 1226.5645933014355,426.9856459330143 1333.2822966507179,413.49282296650716 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
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
