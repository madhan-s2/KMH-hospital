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
 
  const { Header, Content, Sider } = Layout;
    return (
        
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
          <Menu.Item key="1">
          <Dropdown  overlay={menu} placement="topCenter">
                    <Button><p>Vaccination</p></Button>
          </Dropdown>
          </Menu.Item>
          <Menu.Item overlay={menu} key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>

          
        </Layout>

        
    )
}

export default Nav
