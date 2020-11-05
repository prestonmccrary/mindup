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
        <Title level={2} style={{color: "#13384e", marginTop: "30px", textAlign: "center"}}> Info </Title>
        <Text style={{margin:'0px auto', maxWidth: '800px', width: '90%'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque distinctio odit? Autem minima quis repellendus explicabo reprehenderit. Laborum assumenda reprehenderit quas omnis ipsa est obcaecati in voluptatem minima explicabo! </Text>
        </div>
    )
}

export default Partners