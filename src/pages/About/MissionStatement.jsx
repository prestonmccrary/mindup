import React from 'react'

import {Typography} from 'antd'

import {motion} from 'framer-motion'

import fastily from '../../assets/partners/fastily-logo.png'
import muvik from '../../assets/partners/muvik-logo.png'
import m2 from '../../assets/partners/m2-logo.png'
import bci from '../../assets/partners/openbci-logo.png'

const {Title, Text} = Typography

const Partners = () => {

    return(
        <div style={{width: "100%", alignItems: 'center', display: 'flex', flexDirection: "column", marginTop: '60px'}}>
        <Title level={2} style={{color: "#13384e", marginTop: "30px", textAlign: "center"}}> Mission </Title>
        <Text style={{margin:'0px auto', maxWidth: '800px', width: '90%'}}>Our neuroadaptive breathing entrainment system serves to identify an ideal breathing rhythm for a user to effectively address anxiety in real-time. Our system is adaptive, taking into account the output of the deep learning algorithm to determine whether a particular breathing rate has an alleviating effect on the user’s mental state, and adapting accordingly until ultimately finding the user’s ideal breathing rate.</Text>
        </div>
    )
}

export default Partners