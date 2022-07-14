import React , {useState,useEffect} from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import firebase from '../firebase.js'



import { Card, Col, Row,Button,Spin } from 'antd';
const { Meta } = Card;
const Dhuruvam=()=> {
    const [FeedBacks, setFeedBacks] = useState([]);
    const [loading, setLoading] = useState(false);

  
  

    useEffect(()=>{
          //ONE TIME GET FUNCTION
    const ref = firebase.firestore().collection("Feedbacks");
    setLoading(true);
    function getFeedBacks() {
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
        setLoading(false);
        setFeedBacks(items);
        });
    }
  
        getFeedBacks();
    },[]);

console.log(loading)
    if(loading){
        <h1>Loading</h1>
   
    }
    return (
        <div>
             <HelmetProvider>
                    <Helmet>
                        <title>FeedBack</title>
                    </Helmet>
             </HelmetProvider>
            
           <div className="title-pongal">
               <h1>FeedBack </h1>
           </div>
          
		

         </div>
    )
}

export default Dhuruvam;

