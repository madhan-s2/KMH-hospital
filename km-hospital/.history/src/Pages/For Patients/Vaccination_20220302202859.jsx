import React ,{useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
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

  return(
      
<div>  
    <div lg={24} className={Styles.tab}>               
        <Tabs defaultActiveKey="1" centered>


            <TabPane tab="Tab 1" key="1">
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
            </TabPane>



            <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
            </TabPane>
        </Tabs>
    </div> 
</div>
    
    )}

export default Vaccination;
