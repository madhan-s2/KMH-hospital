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
          
          <div className="site-card-wrapper">
          <Spin tip="Loading ..." style={{width:1550}} size="large" spinning={loading}>
          
          </Spin>&nbsp;
         
       
          <Row gutter={0}>
                        {FeedBacks.map((feedback) =>(
                            <div key={feedback.key}> 
                                <Col span={1}>
                                <Card
                                        className="card-item"
                                        style={{ width: 350 , height:300 , marginLeft:120}
                                }> 
                                <Meta
                                    title={feedback.name}
                                    description={feedback.feedback}
                                />   
                                </Card>
                             </Col> 
                            </div>
                        ))}
                  
                  </Row>
            </div>
            <Button style={{marginBottom:20}} className="btn" type="danger"><a href="/docs" className="ref"><b>Submit</b></a> </Button>

        </div>
    )
}

export default Dhuruvam;

