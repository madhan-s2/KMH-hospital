import React from 'react'
import Styles from '../Styles/Nav.module.css'
import { Layout, Menu, Button, Dropdown } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Logo from '../Images/logoWithBg.png'

import {HomeTwoTone,
    FolderOpenTwoTone,
    MedicineBoxTwoTone,
    PlusCircleTwoTone,
    FireTwoTone ,
    MailTwoTone,
    PhoneFilled,
    MailFilled,
    setTwoToneColor,
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
      <Header className="header">
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        <h1>KM HOSPITAL</h1>
          <Menu.Item key="7">Home</Menu.Item>
          <Menu.Item key="2">About Us</Menu.Item>
          <Menu.Item key="3">Hospitals</Menu.Item>
          <Menu.Item key="4">Specialities</Menu.Item>
          <Dropdown  overlay={patients} placement="topCenter">
              <Menu.Item key="5">For patients</Menu.Item>
          </Dropdown>
          <Menu.Item key="6">Contact Us</Menu.Item>

          <Menu.Item key="1">
          <Dropdown  overlay={menu} placement="topCenter">
                    <Menu.Item>Vaccination</Menu.Item>
          </Dropdown>
          </Menu.Item>
        </Menu>
      </Header>

          
        </Layout>

        
    )
}

export default Nav
