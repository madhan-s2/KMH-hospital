import React ,{useState} from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';
import Styles from '../../Styles/Appointment.module.css'

function BookAppointment() {
const [componentSize, setComponentSize] = useState('default');

const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
        };


  return(
      
    <div>
        <h1 style={{textAlign: 'center'}}>Book an Appoinment with Us ..!</h1>
            <div className={Styles.form}>
              <Form
                            labelCol={{
                                span: 10,
                            }}
                            wrapperCol={{
                                span:4,
                            }}
                            layout="horizontal"
                            initialValues={{
                                size: componentSize,
                            }}
                            onValuesChange={onFormLayoutChange}
                            size={componentSize}
                            >
                            
                            <Form.Item label="Name of the Patient">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Select">
                                <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="TreeSelect">
                                <TreeSelect
                                treeData={[
                                    {
                                    title: 'Light',
                                    value: 'light',
                                    children: [
                                        {
                                        title: 'Bamboo',
                                        value: 'bamboo',
                                        },
                                    ],
                                    },
                                ]}
                                />
                            </Form.Item>
                            <Form.Item label="Cascader">
                                <Cascader
                                options={[
                                    {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                        },
                                    ],
                                    },
                                ]}
                                />
                            </Form.Item>
                            <Form.Item label="DatePicker">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="InputNumber">
                                <InputNumber />
                            </Form.Item>
                            <Form.Item label="Switch" valuePropName="checked">
                                <Switch />
                            </Form.Item>
                            <Form.Item label="Button">
                                <Button>Button</Button>
                            </Form.Item>
                </Form>
            </div>
           

</div>
    
    )}

export default BookAppointment;
