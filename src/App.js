import React, { useEffect } from 'react'
import './App.css'
import Login from './Components/Login'
import { getTokenFromUrl } from './spotify'
import SpotifywebApi from 'spotify-web-api-js'
import Player from './Components/Player';
import { useDataLayerValue } from './DataLayer'



const spotify = new SpotifywebApi();

const App = () => {
  // const [token, setToken] = useState(null)
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      })
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      })

      spotify.getPlaylist('37i9dQZEVXcNFIhI0XMFt0').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        });
      })
    }
    // console.log('i have token', _token);
  }, [token, dispatch]);
  // console.log('hello user', user);
  // console.log('hello shivam token', token);


  return (
    <div className='app'>
      {token ? (<Player spotify={spotify} />) : (<Login />)}
    </div>
  )
}

export default App
