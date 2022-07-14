import React from 'react'
import Styles from '../Styles/Nav.module.css'
import { Layout, Menu, Button, Dropdown } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


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
          
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
       
      
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
      </Menu>
    
  )
 
  const { Header} = Layout;
    return (
        
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
         
          <Dropdown  overlay={menu} placement="topCenter">
              <Menu.Item key="2">Home</Menu.Item>
          </Dropdown>
          <Dropdown  overlay={menu} placement="topCenter">
              <Menu.Item key="3">About</Menu.Item>
          </Dropdown>
          <Menu.Item key="4">Hospital</Menu.Item>
          <Menu.Item key="5">Specialities</Menu.Item>
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
