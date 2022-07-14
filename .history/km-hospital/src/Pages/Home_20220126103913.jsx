import React ,{useState , useEffect} from 'react';
import { Card, Col, Row } from 'antd';
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
      <h1>Home</h1>
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
  </div>;
}

export default Home;
