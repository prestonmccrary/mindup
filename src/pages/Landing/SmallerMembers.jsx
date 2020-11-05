import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'

import { Avatar, Card, Typography, Button, Dropdown, Divider,Menu, message} from 'antd';

import { LinkedinFilled, YoutubeFilled } from '@ant-design/icons';


import {motion} from 'framer-motion'

const {Title, Text} = Typography



const TeamMember = ({info}) => {




  return(

  <motion.div  style={{width: 220, margin:'20px 30px'}}  whileHover={{scale: 1.05, transition: {type: 'linear'}}}>
    <Card
      hoverable
      style={{ width: "100%", cursor: "default",  borderRadius:"15px", display: 'flex', justifyContent:'center', alignItems: 'center'}}
    >
      <Text strong style={{color: "#13384e", fontSize: '16px', marginTop: '3px'}}>{info.name}</Text>
    </Card>
      </motion.div>


   
    
    //   <div style={{position: 'static', height: "250px", background: "red", borderRadius: "8px"}}>
    //       <Avatar size={200} style={{borderRadius: "5px",  filter:" grayscale(100%)"}} src={beier}></Avatar>
    //   </div>
  )
}

export default TeamMember;
