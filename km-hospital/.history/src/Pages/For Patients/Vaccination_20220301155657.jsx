import React, {useState,useEffect} from 'react'
import firebase from '../../firebase.js'
import { Card, Col, Row } from 'antd';
import Styles from '../../Styles/Feedback.module.css'
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,  
  } from 'antd';
const { Meta } = Card;
function Vaccination() {
    const [mob_num,setMob_num] = useState('');
const [componentSize, setComponentSize] = useState('default');

const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
        };

const onFinish = (values) =>{
    console.log(values);
    setMob_num(values.mob_num);
    //console.log("date" , values.date._d);
    const db = firebase.firestore();
            const userRef = db.collection("Appointment").add({
            name: values.name,
            gender:values.gender,
            age:values.age,
            date:values.date._d,
            mob_num:values.mob_num
            }).then(alert('Your anticipated feedback is noted..!'));
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Vaccination</h1>


            <div className={Styles.form}>
              <Form
                            labelCol={{
                                span: 10,
                            }}
                            wrapperCol={{
                                span:8,
                            }}
                            onFinish={onFinish}
                            layout="horizontal"
                            initialValues={{
                                size: componentSize,
                            }}
                            onValuesChange={onFormLayoutChange}
                            size={componentSize}
                            >
                            
                            <Form.Item label="Name of the Patient" name="name">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Gender" name="gender">
                                <Select>
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="female">Female</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Age" name="age">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Date of Appointment" name="date"> 
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="Mobile Number" name="mob_num">
                                <Input />
                            </Form.Item>
                            <Form.Item >
                                <Button  htmlType="submit" type="primary">Book</Button>
                            </Form.Item>
                </Form>

              
            </div>
             
        </div>
    )
}

export default Vaccination
