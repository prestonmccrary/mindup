import React from 'react'

import {Typography, Image} from 'antd'

import useMedia from '../../hooks/useMedia'

const {Title, Text} = Typography




const Photos = () => {

    const mobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true])


    return (
    <div>
        <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap", width: '100%', marginTop: "30px", flexWrap: 'wrap'}}>
            <img src="https://cdn.discordapp.com/attachments/626507510085320725/774045341875568670/BW1.png" style={{width: mobile ? '75%':'35%',borderRadius: "10px", margin: "20px 50px"}}></img>
            <img src="https://cdn.discordapp.com/attachments/626507510085320725/774045371365195776/BW2.png" style={{width: mobile ? '75%': '35%',borderRadius: "10px", margin: "20px 50px"}}></img>
        </div>
    </div>
    )
}

export default Photos