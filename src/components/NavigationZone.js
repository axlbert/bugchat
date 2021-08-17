import React, { useState } from 'react';
import CommunicationZone from './CommunicationZone';
import NavigationCard from './NavigationCard'

const NavigationZone = () => {

    const [chats, setChats] = useState([{ name: 'chat1', state: {} }, { name: 'chat2', state: {} }])



    return <div className="chatWrapper">
        <div className="navigationWrapper">
            {chats.map(el => <NavigationCard name={el.name} />)}
        </div>

        <CommunicationZone />

    </div>

}

export default NavigationZone