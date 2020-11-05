import React from 'react'

import {Card, Avatar, Typography, Button} from 'antd'
import {Link} from 'react-router-dom'
import TeamMember from './TeamMeber'

import brian from '../../assets/team/brian.png'
import sean from '../../assets/team/sean.png'
import avi from '../../assets/team/avi.png'

import SmallerMember from '../About/SmallMembers'


const {Title, Text} = Typography

const Team =({onLanding}) => {

    return(
        <div style={{width: '100%',display:'flex', alignItems: 'center',flexDirection: 'column'}} >
            <Title level={2} style={{color: "#13384e", marginTop: "30px", textAlign: "center"}}> Team </Title>

            <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap", maxWidth: '1000px', margin: '0px auto', marginBottom: '40px'}}>
                <TeamMember info={{name: "Brian Penchina", role: "Founder | ML", linkedIn:onLanding ? '' : "brian-penchina", img: brian}}/>
                <TeamMember info={{name: "Sean Cheong", role: "Founder | ML", linkedIn:onLanding ? '' : "brian-penchina", img: sean}}/>
                <TeamMember info={{name: "Avi Curryasan", role: "Founder | ML", linkedIn: onLanding ? '' :"brian-penchina", img: avi}}/>
                <SmallerMember info={{name: "Adam Smith", role: "Dude", linkedIn: onLanding ? '' :"link" }}/>
                <SmallerMember info={{name: "Adam Smith", role: "Dude", linkedIn: onLanding ? '' :"link" }}/>
                <SmallerMember info={{name: "Adam Smith", role: "Dude", linkedIn: onLanding ? '' :"link" }}/>
                <SmallerMember info={{name: "Adam Smith", role: "Dude", linkedIn: onLanding ? '' :"link" }}/>
                <SmallerMember info={{name: "Adam Smith", role: "Dude", linkedIn: onLanding ? '' :"link" }}/>
                <SmallerMember info={{name: "Adam Smith", role: "Dude", linkedIn: onLanding ? '' :"link" }}/>

            </div>
            {onLanding &&
            <Link to="/about"><Button type="primary">See Full Team</Button></Link>
            }
        </div>
    )
}

export default Team