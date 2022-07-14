import React, {useState,useEffect} from 'react'
import firebase from '../../firebase.js'
import { Card, Col, Row,Button } from 'antd';
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
