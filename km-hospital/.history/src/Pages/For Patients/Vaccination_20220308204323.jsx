import React ,{useState} from 'react';
import { Form, Input, Button, Select } from 'antd';
import firebase from '../../firebase'
import { Tabs } from 'antd';



import Styles from '../../Styles/Vaccination.module.css'

function Vaccination() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const { TabPane } = Tabs;
      const { Option } = Select;
  return(
      
<div>  
    <div lg={24} className={Styles.tab}>               
        <Tabs defaultActiveKey="1" centered>


            <TabPane tab="Covid" key="1">
                <div className={Styles.form}>
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
                        label="Vaccine for"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="age"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    placeholder="Choose Gender"
                    allowClear
                    >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>


                <Form.Item
                    name="Vaccine"
                    label="Vaccine"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    placeholder="Choose Vaccine"
                    allowClear
                    >
                    <Option value="d1">Dose 1</Option>
                    <Option value="d2">Dose 2</Option>
                    <Option value="boost">Booster</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                        label="Aadhar Number"
                        name="aadhar"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Aadhar Number!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit for Covid
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
            </TabPane>



            <TabPane tab="Polio" key="2">
            <div className={Styles.form}>
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
                        label="Vaccine for"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="age"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    placeholder="Choose Gender"
                    allowClear
                    >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                        label="Aadhar Number"
                        name="aadhar"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Aadhar Number!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                   <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit for Polio
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
            </TabPane>




            <TabPane tab="Chicken Pox" key="3">
                    <div className={Styles.form}>
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
                        label="Vaccine for"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="age"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    placeholder="Choose Gender"
                    allowClear
                    >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                        label="Aadhar Number"
                        name="aadhar"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Aadhar Number!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
               



                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit for Pox
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
            </TabPane>
        </Tabs>
    </div> 
</div>
    
    )}

export default Vaccination;
