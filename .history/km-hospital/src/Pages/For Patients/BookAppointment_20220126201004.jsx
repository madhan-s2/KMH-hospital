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
                                span:8,
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
                            <Form.Item label="Gender">
                                <Select>
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="female">Female</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Date of Appointment">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="Mobile Number">
                                <Input />
                            </Form.Item>
                            <Form.Item submit="htmlSubmit">
                                <Button type="primary">Book</Button>
                            </Form.Item>
                </Form>

              
            </div>
           
            <div className="quickGlace">
              <h3> Quick Contact</h3> 
           <p> If you need any assistance in booking an appointment, please call our 24/7 Helpline Number

            Phone: 040-68334455
            Email: info@medicoverhospitals.in</p>

                </div>
</div>
    
    )}

export default BookAppointment;
