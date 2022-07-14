import React, {useState,useEffect} from 'react'
import firebase from '../../firebase.js'

function Symptoms() {
    const [symps,setSymps] = useState([]);
    const refOne = firebase.firestore().collection("Symptoms");

    useEffect(()=>{
        function getHospitals() {
            refOne.onSnapshot((querySnapshot)=>{
                const symps = [];
                querySnapshot.forEach((doc)=>{
                    symps.push(doc.data());
                });
                console.log(symps);
            setHospitals(symps);
            });
        }  
            getHospitals();
    },[])


    return (
        <div>
           <h1 style={{textAlign: 'center'}}>Symptoms</h1>
           <div className={Styles.symp}>
               
            </div>
        </div>
    )
}
export default Symptoms
