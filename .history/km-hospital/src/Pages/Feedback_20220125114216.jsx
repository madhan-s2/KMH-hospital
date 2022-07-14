import React,{useState,useEffect} from 'react'
import firebase from '../firebase'
import { Form, Input, Button } from 'antd';
const API_BASE = "http://localhost:5000"

function Feedback() {
		const onFinish = (values) => {
		  console.log('Success:', values);
		};
	 
		const onFinishFailed = (errorInfo) => {
		  console.log('Failed:', errorInfo);
		};



const [feedBacks,setFeedBacks] = useState([]);
const [newFeedBack,setNewFeedBack] = useState([]);
const [newName,setNewName] = useState([]);
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
            <div >
            <h1>Feedback</h1>
               {feedBacks.map(feedBack=>(
                   <div key={feedBack._id}>
							 <h2>{feedBack.name}</h2>
					        <h3>{feedBack.feedback}</h3>
                   </div>
               ))}
            </div>


            <Form
					name="basic"
					labelCol={{
							span: 8,
					}}
					wrapperCol={{
							span: 16,
					}}
					initialValues={{
							remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					>
						<Form.Item
							label="Username"
							name="username"
							rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
							]}
					>
							<Input
							onChange={e=>setNewName(e.target.value)}
							value={newName}
							/>
					</Form.Item>



					<Form.Item
							label="Feedback"
							name="feedback"
							rules={[
							{
								required: true,
								message: 'Please input your Feedback!',
							},
							]}
					>
							<Input
							onChange={e=>setNewFeedBack(e.target.value)}
							value={newFeedBack}
							/>
					</Form.Item>

					<Form.Item>
					<Button type="primary" onClick={addFeedBack}>
						Submit
					</Button>
					</Form.Item>
    </Form>

        </div>
    )
}
export default Feedback;
