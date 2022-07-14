import React ,{useState} from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';


function BookAppointment() {
const [componentSize, setComponentSize] = useState('default');

const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
        };


  return(
      
    <div>

            <Form
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 4,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                >
                
                <Form.Item label="Input">
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
    
    )}

export default BookAppointment;
