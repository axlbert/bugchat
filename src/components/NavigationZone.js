import React, { useState } from 'react';
import CommunicationZone from './CommunicationZone';
import NavigationCard from './NavigationCard'

const NavigationZone = () => {

    const [chats, setChats] = useState([
        { name: 'chat1', state: { history: ['How can I help?'] } },
        { name: 'chat2', state: { history: ['How can I help?'] } }
    ])
    const [chatIndex, setChatIndex] = useState(0)


    const changeChat = (index) => {
        setChatIndex(index)
    }

    const updateChat = (state) => {
        let newChat = chats
        newChat[chatIndex].state = state
        // console.log('update Chate', newChat, newChat[chatIndex])
        setChats(newChat)
    }


    return <div className="chatWrapper">
        <div className="navigationWrapper">
            {chats.map((el, i) =>
                <div key={i} onClick={() => changeChat(i)}>
                    <NavigationCard name={el.name} />
                </div>
            )}
        </div>

        <CommunicationZone propState={chats[chatIndex].state} updateChat={updateChat} />

    </div>

}

export default NavigationZone