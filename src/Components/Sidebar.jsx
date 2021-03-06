import React from 'react'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';


const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="log" />
            <SidebarOption title=' Home' Icon={HomeIcon} />
            <SidebarOption title=' Search' Icon={SearchIcon} />
            <SidebarOption title=' Your Library' Icon={LibraryMusicIcon} />
            <br />
            <strong className='sidebar__titile'>PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => {
                console.log(playlist)
                return <SidebarOption title={playlist.name} />
            })}
            {/* < SidebarOption title='Hip hop' />
            <SidebarOption title='Rock' />
            <SidebarOption title='RnB' /> */}
        </div>
    )
}

export default Sidebar
