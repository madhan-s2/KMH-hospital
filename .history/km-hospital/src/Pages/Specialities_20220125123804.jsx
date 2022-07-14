import React from 'react'
import Styles from '../Styles/Specialities.module.css'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import firebase from '../firebase.js'
import { Card, Col, Row,Button,Spin } from 'antd';
const { Meta } = Card;
function AboutUS() {
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
                        <title>KM Hospital | Specialities</title>
                    </Helmet>
             </HelmetProvider>

             <div className="aboutus">
                 <div className={Styles.title}>
                    <h1>Centers of Dominant Acheivement</h1>
                 </div>
                 <Spin tip="Loading ..." style={{width:1550}} size="large" spinning={loading}></Spin><br/>;
                 <Row gutter={[60,30]}>
                    {FeedBacks.map((feedback)=>(
                        <div className={feedback.key}>
                            <Col lg={{span:1 ,offset:2}}  >
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={feedback.img} />}
                                    >
                                        <Meta title={feedback.name} description={feedback.feedback} />
                                    </Card>
                                    </Col>
                        </div>
                    ))}
                 </Row>
             </div>
            
        </div>
    )
}

export default AboutUS
