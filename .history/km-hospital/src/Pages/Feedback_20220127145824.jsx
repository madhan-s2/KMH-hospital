import React , {useState,useEffect} from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import firebase from '../firebase.js'
import { css } from "@emotion/react";
import Styles from '../Styles/Feedback.module.css'
import DotLoader from "react-spinners/DotLoader"
import { Card, Col, Row,Button ,Carousel } from 'antd';
const { Meta } = Card;
const Dhuruvam=()=> {
    const override = css`
    display: block;
    margin: 0 auto;
   
  `;
    const contentStyle = {
        height: '460px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#001529',
      };



    const [FeedBacks, setFeedBacks] = useState([]);
    const [homeCols , setHomeCols] = useState([]);
    const [hospitals , setHospitals] = useState([]);
    const [loading, setLoading] = useState(false);


 
    useEffect(()=>{
            setLoading(true);
            setTimeout(()=>{
                setLoading(false)
            },8000)
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

        const refTwo = firebase.firestore().collection("HomeCols");
        function getHomeCols() {
            refTwo.onSnapshot((querySnapshot)=>{
                const cols = [];
                querySnapshot.forEach((doc)=>{
                    cols.push(doc.data());
                });
                console.log(cols);
            setHomeCols(cols);
            });
        }

        const refThree = firebase.firestore().collection("Hospitals");
        function getHospitals() {
            refThree.onSnapshot((querySnapshot)=>{
                const hsptls = [];
                querySnapshot.forEach((doc)=>{
                    hsptls.push(doc.data());
                });
                console.log(hsptls);
            setHospitals(hsptls);
            });
        }  
            getHospitals();
            getFeedBacks();
            getHomeCols();
   
},[]);

    return (
        <div>
            {
              loading ? 
                <DotLoader
                    color='#1890ff' 
                    loading={loading}
                    css = {override}
                    size={60} />

                    :
            <div>
            <HelmetProvider>
                    <Helmet>
                        <title>FeedBack</title>
                    </Helmet>
             </HelmetProvider>
         ,
             <Row gutter={[90,30]}>  
                {hospitals.map((hospital)=>(
                    <div >
                   <Col align="middle" lg={{span:5 ,offset:10}}  >
                   <Card
                        className={Styles.card}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img src={hospital.img} alt="svg" width="300" height="200"/>}
                    >
                        <Meta style={{color:'red'}} title={hospital.city} description={hospital.address} />
                        <Button style={{width:"300"}} type="primary" href="/">Page</Button>
                    </Card>     
                    </Col>  
                    </div>
             ))}       
        </Row>

             <Carousel autoplay>
                 
                 {FeedBacks.map((feedback)=>(                
                    <div span={4} offset={4} >
                      <h1  style={contentStyle} ><img style={{marginLeft:600}} width="310" height="461"   src={feedback.img} /></h1>
                        {/* <img  style={contentStyle}   src={feedback.img} /> */}
                         
                    </div>
                 ))}

                </Carousel>
                    {/* <div>
                            <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                            <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                            <h3 style={contentStyle}>4</h3>
                    </div>
            */}

             <img src="https://img.icons8.com/ios-filled/50/000000/doctor-male.png"/>   
           

          
           <div className="title-pongal">
               <h1>FeedBack </h1>
           </div>
		   {/* <Spin tip="Loading ..." style={{width:1550}} size="large" spinning={loading}> */}
          
          {/* </Spin><br/>; */}
          <Row gutter={[90,30]}>  
                {homeCols.map((homeCol)=>(
                    <div >
                   <Col lg={{span:2 ,offset:1}}  >
                        <Card 
                                justify="center" align="middle"
                                hoverable
                                style={{ width: 280 }}
                            > 
                                <img src={homeCol.img} alt="svg"/>
                                    <Meta title={homeCol.name} />
                            </Card>        
                    </Col>  
                    </div>
             ))}       
        </Row>

		   <Row gutter={[90,30]}>
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
</Row>
      </div>
      }</div>
    )
}

export default Dhuruvam;

