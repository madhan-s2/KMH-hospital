import React , {useState,useEffect} from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import firebase from '../firebase.js'
import { Card, Col, Row,Spin } from 'antd';
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


             <img src="https://img.icons8.com/ios-filled/50/000000/doctor-male.png"/>   
           
             <Row gutter={[16, 16]}>
                <Col span={4} />
                <Col span={4} />
                <Col span={4} />
                <Col span={4} />
                <Col span={4} />
                <Col span={4} />
            </Row>
           <div className="title-pongal">
               <h1>FeedBack </h1>
           </div>
		   <Spin tip="Loading ..." style={{width:1550}} size="large" spinning={loading}>
          
          </Spin><br/>;

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
    )
}

export default Dhuruvam;

