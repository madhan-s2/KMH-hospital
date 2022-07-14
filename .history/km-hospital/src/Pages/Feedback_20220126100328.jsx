import React , {useState,useEffect} from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import firebase from '../firebase.js'
import { Card, Col, Row,Spin } from 'antd';
const { Meta } = Card;
const Dhuruvam=()=> {
    const [FeedBacks, setFeedBacks] = useState([]);
    const [homeCols , setHomeCols] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
          //ONE TIME GET FUNCTION
    // const ref = firebase.firestore().collection("Departments");
  
    // setLoading(true);
    // function getFeedBacks() {
    //     ref.onSnapshot((querySnapshot)=>{
    //         const items = [];
    //         querySnapshot.forEach((doc)=>{
    //             items.push(doc.data());
    //         });
    //     setLoading(false);
    //     setFeedBacks(items);
    //     });
    // }

    const ref2 = firebase.firestore().collection("HomeCols");
    function getHomeCols() {
        ref2.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
        setFeedBacks(items);
        });
    }
  
        // getFeedBacks();
        getHomeCols();
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
                <Col style={{backgroundColor:'#f6f5e1'}} justify="space-around" align="middle" span={4}>
                    {homeCols.map((homeCol)=>{
                        <h1>{homeCol.name}</h1>
                    })}
                </Col>
               
            </Row>
           <div className="title-pongal">
               <h1>FeedBack </h1>
           </div>
		   <Spin tip="Loading ..." style={{width:1550}} size="large" spinning={loading}>
          
          </Spin><br/>;

		   {/* <Row gutter={[90,30]}>
			{FeedBacks.map((feedback)=>(
				<div className={feedback.key}>
					<Col lg={{span:5 ,offset:4}}  >
							<Card
								hoverable
								style={{ width: 280 }}
								cover={<img alt="example" src={feedback.img} />}
							>
								<Meta title={feedback.name} description={feedback.desc} />
							</Card>
							</Col>
				</div>
			))}
</Row> */}
      </div>
    )
}

export default Dhuruvam;

