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
import firebase from '../../firebase'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import Styles from '../../Styles/Appointment.module.css'

function BookAppointment() {
const [componentSize, setComponentSize] = useState('default');

const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
        };

const onSignInSubmit = (values) =>{
    console.log(values);
    //console.log("date" , values.date._d);
    const db = firebase.firestore();
            const userRef = db.collection("Appointment").add({
            name: values.name,
            gender:values.gender,
            age:values.age,
            date:values.date._d,
            mob_num:values.mob_num
            }).then(alert('Your anticipated feedback is noted..!'));
// this.configureCaptcha();
            preventDefault();
            configureCaptcha();
            const phoneNumber = "+91"+values.mob_num;
            const appVerifier = window.recaptchaVerifier;

            const auth = getAuth();
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
                console.log("OTP has been set")
                }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log(error.message);
                });
}





const configureCaptcha=()=>{
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);
}

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
                            onFinish={onSignInSubmit}
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
                                <Button htmlType="submit" type="primary">Book</Button>
                            </Form.Item>
                </Form>

              
            </div>
           
            <div className={Styles.quickGlance}>
                    <h3> Quick Contact</h3> 
                     <p> If you need any assistance in booking an appointment, please call our 24/7 Helpline Number
<br/>
                    Phone: 040-68334455<br/>
                    Email: kavinbrti.doc@kmhptl.com</p>

                </div>
                <div id="sign-in-method"></div>
</div>
    
    )}

export default BookAppointment;
