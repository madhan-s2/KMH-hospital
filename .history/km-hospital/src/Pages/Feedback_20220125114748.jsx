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
                        <title>ழகரம் | துருவம்</title>
                    </Helmet>
             </HelmetProvider>
            
           <div className="title-pongal">
               <h1>துருவம் </h1>
           </div>
          
          <div className="site-card-wrapper">
          <Spin tip="ஏற்றுகிறது ..." style={{width:1550}} size="large" spinning={loading}>
          
          </Spin>&nbsp;
          <h2 className="poster_title">சுவரொட்டி</h2>
       
          <Row gutter={0}>
                        {FeedBacks.map((event) =>(
                            <div key={event.key}> 
                                <Col span={1}>
                                <Card
                                        className="card-item"
                                        style={{ width: 350 , height:300 , marginLeft:120}}
                                        cover={
                                        <img
                                            alt="example"
                                            src={event.img}
                                            height={200}                      
                                        />
                                }> 
                                <Meta
                                    title={event.title}
                                    description={event.description}
                                />   
                                </Card>
                             </Col> 
                            </div>
                        ))}
                  
                  </Row>
            </div>
            <Button style={{marginBottom:20}} className="btn" type="danger"><a href="/docs" className="ref"><b>பதிவிற்கு</b></a> </Button>

        </div>
    )
}

export default Dhuruvam;

