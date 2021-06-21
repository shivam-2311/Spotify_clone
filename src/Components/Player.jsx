import React from 'react'
import '../player.css'
import Body from './Body'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Player = ({ spotify }) => {
    return (
        <div className='player'>
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}

export default Player
