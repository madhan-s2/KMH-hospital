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
    const ref = firebase.firestore().collection("Departments");
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
           
             <Row style={{backgroundColor:'#eee'}}  gutter={[32, 16]}>
                <Col style={{backgroundColor:'#f6f5e1'}} justify="space-around" align="middle" span={4}>Doctors</Col>
                <Col style={{backgroundColor:'#f6f5e1'}}  justify="space-around" align="middle"  span={4}>Book an appointment</Col>
                <Col justify="space-around" align="middle" span={4}>Health Checkup packages</Col>
                <Col justify="space-around" align="middle" span={4}>Second Opinion</Col>
                <Col justify="space-around" align="middle" span={4}>Diseases</Col>
                <Col justify="space-around" align="middle" span={4}>Medicines</Col>
            </Row>
           <div className="title-pongal">
               <h1>FeedBack </h1>
           </div>
		   <Spin tip="Loading ..." style={{width:1550}} size="large" spinning={loading}>
          
          </Spin><br/>;

		   <Row gutter={[60,30]}>
			{FeedBacks.map((feedback)=>(
				<div className={feedback.key}>
					<Col lg={{span:5 ,offset:3}}  >
							<Card
								hoverable
								style={{ width: 240 }}
								cover={<img alt="example" src={feedback.img} />}
							>
								<Meta title={feedback.name} description={feedback.desc} />
							</Card>
							</Col>
				</div>
			))}
</Row>
      </div>
    )
}

export default Dhuruvam;

