import React ,{useState , useEffect} from 'react';
import { Card, Col, Row } from 'antd';
import firebase from  '../firebase.js'
import Styles from '../Styles/Home.module.css'
const { Meta } = Card;
function Home() {
    const [homeCols , setHomeCols] = useState([]);

    useEffect(()=>{
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
        getHomeCols();
    })
  return <div>
      <h1 style={{textAlign: 'center'}}>Hearty Welcome ..!</h1>
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
  </div>;
}

export default Home;
