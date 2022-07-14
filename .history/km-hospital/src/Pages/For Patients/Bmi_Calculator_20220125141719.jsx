import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import { Form, Input, Select, Tooltip, Button, Space, Typography } from 'antd';


function Bmi_Calculator() {
        const { Option } = Select;
        const onFinish = values => {
        console.log('Received values of form: ', values);
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
                        <Input style={{ width: 160 }} placeholder="Please input" />
                    </Form.Item>
                    </Space>
                </Form.Item>
                <Form.Item label="Address">
                    <Input.Group compact>
                    <Form.Item
                        name={['address', 'province']}
                        noStyle
                        rules={[{ required: true, message: 'Province is required' }]}
                    >
                        <Select placeholder="Select province">
                        <Option value="Zhejiang">Zhejiang</Option>
                        <Option value="Jiangsu">Jiangsu</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['address', 'street']}
                        noStyle
                        rules={[{ required: true, message: 'Street is required' }]}
                    >
                        <Input style={{ width: '50%' }} placeholder="Input street" />
                    </Form.Item>
                    </Input.Group>
                </Form.Item>
                <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
                    <Form.Item
                    name="year"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                    >
                    <Input placeholder="Input birth year" />
                    </Form.Item>
                    <Form.Item
                    name="month"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                    >
                    <Input placeholder="Input birth month" />
                    </Form.Item>
                </Form.Item>
                <Form.Item label=" " colon={false}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
            
        </div>
    )
}

export default Bmi_Calculator
