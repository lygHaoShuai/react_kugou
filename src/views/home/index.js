import React from 'react';
import Charts from './playlists-charts/charts'
import Playlists from './playlists-charts/playlists'

import Song from './new-song-mv/song'
import MV from './new-song-mv/mv'

import HotDj from './hot-dj'
import HotSinger from './hot-singer'

import './index.scss'

class Home extends React.Component {

    render() {
        return (
            <div className='home-border' >
                {/* Home 组件是父路由的内容 */}
               <div className='content-border'>
                   <div style={{ display: "flex" }} >
                       <div style={{ flex: '2' }} >
                           <Playlists />
                       </div>
                       <div style={{ flex: '1' }} >
                           <Charts />
                       </div>
                   </div>

                   <div style={{ display: "flex",marginTop: '20px' }} >
                       <div style={{ flex: '2' }} >
                           <Song />
                       </div>
                       <div style={{ flex: '1' }} >
                           <MV />
                       </div>
                   </div>

                   <HotDj />
                   <HotSinger />
               </div>
            </div>
        )
    }
}

export default function (click) {

    return <Home click={click} />
}



