import React from 'react'
import {useState,useEffect} from 'react';

function Feedback() {
    
const [feedBacks,setFeedBacks] = useState([]);
const API_BASE = "http://localhost:5000"

useEffect(()=>{
    getFeedBacks();
},[]);

const getFeedBacks=()=>{
    fetch(API_BASE + "/feedback")
        .then(res => res.json)
        .then(data => setFeedBacks)
        .catch((error)=>{console.log(error.message)})
}
    return (
        <div>
            <div>
               {feedBacks.map(feedBack=>(
                   <div>
                       <h1>Feedback</h1>
                       <h1>{feedBack.name}</h1>
                   </div>
               ))}
            </div>
        </div>
    )
}

export default Feedback
