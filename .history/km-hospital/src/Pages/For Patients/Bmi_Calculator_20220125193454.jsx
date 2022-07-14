import React ,{useState} from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Form, Input, Select, Button, Space } from 'antd';
import BmiImage from '../../Images/bmi-calculator.png'
function Bmi_Calculator() {
    const [bmi,setBmi] = useState(" ");
        const { Option } = Select;
        const onFinish = values => {
        const bmi = values.weight / (values.height*values.height);
        setBmi(bmi);
        alert("Your Body Mass Index is " + bmi)
  };
    return (
        
        <div>

             <HelmetProvider>
                    <Helmet>
                        <title>KM Hospital | BMI Calculator</title>
                    </Helmet>
             </HelmetProvider>

             <div >
                <h1 style={{textAlign: 'center'}}>BMI Calculator</h1>
            </div>



            <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 10 }} wrapperCol={{ span: 8 }}>
                <Form.Item label="Name">
                    <Space>
                    <Form.Item
                       
                        name="username"
                        noStyle
                        rules={[{ required: true, message: 'Username is required' }]}
                    >
                        <Input style={{ width: 200 }} placeholder="Please input" />
                    </Form.Item>
                    </Space>
                </Form.Item>
                <Form.Item label="Gender and Age">
                    <Input.Group compact>
                    <Form.Item
                        name={['Male', 'Female']}
                        noStyle
                        rules={[{ required: true, message: 'Gender is required' }]}
                    >
                        <Select placeholder="Select Gender">
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={'age'}
                        noStyle
                        rules={[{ required: true, message: 'Street is required' }]}
                    >
                        <Input style={{ width: '35%' }} placeholder="Input Age" />
                    </Form.Item>
                    </Input.Group>
                </Form.Item>
                <Form.Item label="Height(m) and Weight(Kg)" style={{ marginBottom: 0 }}>
                    <Form.Item
                    name="height"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                    >
                    <Input placeholder="Input Height in meters" />
                    </Form.Item>
                    <Form.Item
                    name="weight"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                    >
                    <Input placeholder="Input Weight in KG" />
                    </Form.Item>
                </Form.Item>
                <Form.Item label=" " colon={false}>
                    <Button type="primary" htmlType="submit">
                    Calculate BMI
                    </Button>
                </Form.Item>
                </Form>
                <div style={{backgroundColor:'#f6f5e1'}} >
                <img src={BmiImage} alt="BMI Visual" align="middle" style={{marginLeft:260}} width={1000} height={400}/>
                </div>

                
                <div className="aboutContent">
                <p>The body mass index (BMI) is a screening measure that determines if a person is underweight, overweight, or obese, as well as whether they are at a healthy weight for their height. Most adult men and women aged 20 and over have a BMI, which is a measure of body fat based on their weight in relation to their height. It is used to estimate tissue mass. It's a standard metric for determining whether a person's weight is adequate for their height.</p>
                </div>
        </div>
    )
}

export default Bmi_Calculator
