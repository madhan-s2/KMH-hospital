import React ,{useState} from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Form, Input, Select, Button, Space } from 'antd';
import Styles from '../../Styles/Specialities.module.css'

function Bmi_Calculator() {
    const [bmi,setBmi] = useState(" ");
    const [bmiBool,setBmiBool] = useState(false);
        const { Option } = Select;
        const onFinish = values => {
        const bmi = values.weight / (values.height*values.height);
        setBmi(bmi);
        setBmiBool(true);
        console.log(values.weight);
        console.log(values.height);
        console.log('BMI of yourself is ', bmi);
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
                <Form.Item label="Height" style={{ marginBottom: 0 }}>
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
                <h1 className = {className({bmiBool:bmiBool}) }
                 style={{textAlign: 'center',
                            backgroundColor: 'aqua',
                            borderRadius:'12'
            
            }}>Your Body Mass Index is {bmi}</h1>
            
        </div>
    )
}

export default Bmi_Calculator
