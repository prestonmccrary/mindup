import React from 'react'

import {Card, Avatar, Typography, Button} from 'antd'
import {Link} from 'react-router-dom'
import TeamMember from './TeamMeber'

import brian from '../../assets/team/brian.png'
import sean from '../../assets/team/sean.png'
import avi from '../../assets/team/avi.png'


const {Title, Text} = Typography

const Team =({showButton}) => {

    return(
        <div style={{width: '100%',display:'flex', alignItems: 'center',flexDirection: 'column'}} >
            <Title level={2} style={{color: "#13384e", marginTop: "30px", textAlign: "center"}}> Team </Title>

            <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap"}}>
                <TeamMember info={{name: "Brian Penchina", role: "Backend | ML", linkedIn: "brian-penchina", img: brian}}/>
                <TeamMember info={{name: "Sean Cheong", role: "Backend | ML", linkedIn: "brian-penchina", img: sean}}/>
                <TeamMember info={{name: "Avi Curryasan", role: "Backend | ML", linkedIn: "brian-penchina", img: avi}}/>
            </div>
            {showButton &&
            <Link to="/about"><Button type="primary">See Full Team</Button></Link>
            }
        </div>
    )
}

export default Team