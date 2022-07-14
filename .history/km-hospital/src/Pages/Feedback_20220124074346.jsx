import React from 'react'
import {useState,useEffect} from 'react';

const API_BASE = "http://localhost:5000"

function Feedback() {
const [feedBacks,setFeedBacks] = useState([]);


useEffect(()=>{
    
    getFeedBacks();
    console.log(feedBacks);
},[]);

const getFeedBacks=()=>{
    fetch(API_BASE + "/feedback")
        .then(res => res.json())
        .then(data => setFeedBacks(data))
        .catch((error)=>{console.log(error.message)})
}
    return (
        <div>
            <div >
               {feedBacks.map(feedBack=>(
                   <div key={feedBack.id}>
                       <h1>Feedback</h1>
                       <h1>{feedBack.name}</h1>
                   </div>
               ))}
            </div>
        </div>
    )
}

export default Feedback
