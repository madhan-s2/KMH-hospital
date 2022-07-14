import React ,{useState , useEffect} from 'react';
import { Card, Col, Row, Carousel } from 'antd';
import firebase from  '../firebase.js'
import Styles from '../Styles/Home.module.css'
import Hsptl from '../Images/Hospital.jpeg'
const { Meta } = Card;
function Home() {
    const [homeCols , setHomeCols] = useState([]);
    const [FeedBacks, setFeedBacks] = useState([]);
    const [Yus, setYus] = useState([]);
    const [loading, setLoading] = useState(false);

    const contentStyle = {
        height: '460px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#eee',
      };

    useEffect(()=>{
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

        const refThree = firebase.firestore().collection("yUs");
        
        function getYus() {
            refThree.onSnapshot((querySnapshot)=>{
                const cols = [];
                querySnapshot.forEach((doc)=>{
                    cols.push(doc.data());
                });
                console.log(cols);
            setYus(cols);
            });
        }
        getYus();
        getFeedBacks();
        getHomeCols();
    },[loading])
  return <div>
      <h1 className={Styles.title} style={{textAlign: 'center', backgroundColor:'#28a3e6', marginBottom:'-5px'}}  span={6}>Hearty Welcome...!</h1>
      <img src={Hsptl} alt="Hospital" width="100%" /> <br/><br/><br/><br/><br/><br/>
      <h1 style={{textAlign: 'center'}}>Our Provisions</h1>
      <Row gutter={[90,30]}>  
                {homeCols.map((homeCol)=>(
                    <div  >
                   <Col lg={{span:2 ,offset:4}}  >
                        <Card className={Styles.card}
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
        </Row> <br/>
<h1 style={{textAlign: 'center'}}>Our Area Of Excellence</h1>

                 <Carousel autoplay>  
                        {FeedBacks.map((feedback)=>(                
                            <div span={4} offset={4} >
                            <h1  style={contentStyle} ><img style={{marginLeft:600}} width="310" height="461"   src={feedback.img} /></h1>
                                {/* <img  style={contentStyle}   src={feedback.img} /> */}
                                
                            </div>
                        ))}
                </Carousel>

<h1 style={{textAlign: 'center'}}>Why Choose Us</h1>
<Row gutter={[90,30]}>  
                {Yus.map((Yuss)=>(
                    <div key={Yuss.key}>
                        <Col lg={{span:3,offset:4}}>
                            <Card style={{ width: 600 }}>
                                <Col lg={{span:1}} >
                                <img src={Yuss.img} alt="Why Us" />
                                </Col>
                                <Col>
                                <h2>{Yuss.title}</h2>
                                <p>{Yuss.desc}</p>
                                </Col>          
                            </Card>          
                        </Col>
                    </div>
             ))}       
        </Row> <br/>

  </div>;
}

export default Home;
