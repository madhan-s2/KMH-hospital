import React ,{useState} from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,  
  } from 'antd';
import firebase from '../../firebase'
import { Tabs } from 'antd';



import Styles from '../../Styles/Vaccination.module.css'

function Vaccination() {
const { TabPane } = Tabs;

  return(
      
<div>  
    <div lg={24} className={Styles.tab}>               
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
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
