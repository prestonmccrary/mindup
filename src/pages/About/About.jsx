import React from 'react'

import Team from '../Landing/Team'
import MissionStatement from './MissionStatement'

import SmallMembers from './SmallMembers'

import Info from './Info'

const About = () => {


    return(
        <>
            <MissionStatement/>
            <Info/>
            <Team/>

            <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap", maxWidth: '1000px', margin: '0px auto', marginBottom: '40px'}}>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>
                <SmallMembers info={{name: "Adam Smith", role: "Dude", linkedIn: "link" }}/>

            </div>
        </>

    )
}

export default About