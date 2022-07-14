import React, {useState,useEffect} from 'react'
import firebase from '../../firebase.js'
import Styles from '../../Styles/Symptoms.module.css'

function Symptoms() {
    const [symps,setSymps] = useState([]);
    const refOne = firebase.firestore().collection("Symptoms");

    useEffect(()=>{
        function getSymps() {
            refOne.onSnapshot((querySnapshot)=>{
                const symps = [];
                querySnapshot.forEach((doc)=>{
                    symps.push(doc.data());
                });
                console.log(symps);
            setSymps(symps);
            });
        }  
            getSymps();
    },[])


    return (
        <div>
           <h1 style={{textAlign: 'center'}}>Symptoms</h1>
           <div className={Styles.symp}>
           <Row gutter={[90,30]}> 
           {symps.map((symp)=>{
               <h1>{symp.caps}</h1>
           })}
           </Row>
            </div>
        </div>
    )
}
export default Symptoms
