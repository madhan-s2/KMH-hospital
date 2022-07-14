import React from 'react'

import Styles from '../Styles/Nav.module.css'
import { Layout, Menu, Dropdown,Row,Col } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Logo from '../Images/Logo.png'

import {HomeTwoTone,
    FolderOpenTwoTone,
    MedicineBoxTwoTone,
    PlusCircleTwoTone,
    FireTwoTone ,
    MailTwoTone,
    PhoneFilled,
    MailFilled,
   
    } from '@ant-design/icons'

function Nav() {
  const menu = (
    <Menu>
          
            <Menu.Item key="1">Covid Dose</Menu.Item>
            <Menu.Item key="2">Covid Booster</Menu.Item>
            <Menu.Item key="3">Polio Vaccine</Menu.Item>
            <Menu.Item key="4">Chicken pox Vaccine</Menu.Item>
      </Menu>
  )
const patients = (
  <Menu>   
          <Menu.Item key="1">Health Checkup Package</Menu.Item>
          <Menu.Item key="2">Medicines</Menu.Item>
          <Menu.Item key="3">Symptoms</Menu.Item>
          <Menu.Item key="4">Procedurs</Menu.Item>
          <Menu.Item key="5">BMI Calculator</Menu.Item>
    </Menu>
    
  )
 
  const { Header} = Layout;
    return (
        
      <Layout>
        <div className={Styles.head} >
            <Row gutters={[16,16]}>
              <Col lg={{span:1}}>
              <div className="logo">
              <img src={Logo} alt="Logo" widht={50} height={50}/>
            </div>
              </Col>
              <Col lg={{span:4}}>
              <h1>KM HOSPITAL</h1>
              </Col>
              <Col lg={{span:16}}></Col>
              <Col lg={{span:3}}>
              <div className={Styles.contactHead}>
                <p style={{color:'black'}}><PhoneFilled  style= {{ fontSize: '20px',color: '#00cf23'  }} />&nbsp;+91 95009 77257</p>
                <p><a href="mailto:infokmh@gmail.com"><MailFilled style= {{ fontSize: '20px',color: '#00cf23'  }} />&nbsp;infokmh@gmail.com</a></p>
               </div>
              </Col>
            </Row>
        </div>
        
       
        
      <Header className="header">
      <div className="menubar">
        <Menu style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor:'00cf23'
        }} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
     
       <Menu.Item key="7"><HomeTwoTone style={{fontSize:20}}/>Home</Menu.Item>
          <Menu.Item key="2"><FolderOpenTwoTone style={{fontSize:20}}/>About Us</Menu.Item>
          <Menu.Item key="3"><MedicineBoxTwoTone style={{fontSize:20}}/>Hospitals</Menu.Item>
          <Menu.Item key="4"><PlusCircleTwoTone style={{fontSize:20}}/>Specialities</Menu.Item>
          <Dropdown  overlay={patients} placement="topCenter">
              <Menu.Item key="5"><FireTwoTone style={{fontSize:20}}/>For patients</Menu.Item>
          </Dropdown>
          <Menu.Item key="6"><MailTwoTone style={{fontSize:20}}/>Contact Us</Menu.Item>

          <Menu.Item key="1">
          <Dropdown  overlay={menu} placement="topCenter">
                    <Menu.Item>Vaccination</Menu.Item>
          </Dropdown>
          </Menu.Item>
     
         
        </Menu>  </div>
      </Header>

          
        </Layout>

        
    )
}

export default Nav
