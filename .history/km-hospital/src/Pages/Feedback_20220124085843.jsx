import React from 'react'
import {useState,useEffect} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const API_BASE = "http://localhost:5000"

function Feedback() {
	const Demo = () => {
		const onFinish = (values) => {
		  console.log('Success:', values);
		};
	 
		const onFinishFailed = (errorInfo) => {
		  console.log('Failed:', errorInfo);
		};



const [feedBacks,setFeedBacks] = useState([]);


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
    return (
        <div>
            <div >
            <h1>Feedback</h1>
               {feedBacks.map(feedBack=>(
                   <div key={feedBack._id}>
                       <h1>{feedBack.name}</h1>
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
							<Input />
					</Form.Item>

					<Form.Item
							label="Password"
							name="password"
							rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
							]}
					>
							<Input.Password />
					</Form.Item>

					<Form.Item
							name="remember"
							valuePropName="checked"
							wrapperCol={{
							offset: 8,
							span: 16,
							}}
					>
							<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item
							wrapperCol={{
							offset: 8,
							span: 16,
							}}
					>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
					</Form.Item>
    </Form>

        </div>
    )
}

export default Feedback
