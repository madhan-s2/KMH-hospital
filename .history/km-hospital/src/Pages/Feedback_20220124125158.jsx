import React,{useState,useEffect} from 'react'

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

useEffect(()=>{
    
    getFeedBacks();
    console.log(feedBacks);
},[]);

const getFeedBacks=()=>{
    fetch(API_BASE + "/feedback")
        .then(res => res.json())
        .then(data => setFeedBacks(data))
        .catch((error)=>{console.log(error.message)})
}

const addFeedBack= async ()=>{
	const data = await fetch(API_BASE + "/feedback/createFeedBack",{
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name:newName,
			feedback:newFeedBack
		})
	}).then(res=>res.json()); 
	console.log(data)
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
