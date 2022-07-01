import React,{ Component } from 'react';
import {songAll} from "../../../../utils/play";

import './index.scss'

class RightSong extends Component {

    state = {
        songList: []
    }

    songAllList() {
        songAll('/top/playlist',{cat:this.props.type[this.props.buttonIndex]}).then(data => {
            this.setState({
                songList: data.playlists
            })
        })
    }

    componentDidMount() {
        this.songAllList()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.buttonIndex !== this.props.buttonIndex) {
            this.songAllList()
            window.scrollTo(0,0)
        }
    }

    render() {
        return (
            <div >
                {
                    this.state.songList.length >= 1 ?
                        this.state.songList.map((item,index) => (
                            <div className='content-border-song' key={index} style={{ marginTop: (index > 0 ?  '15px' : '0') }}  >
                                <img className='content-img' src={item.coverImgUrl} />
                                <div className='content-text' >
                                    <div className='text-name' >
                                        <div>{ item.name }</div>
                                        <div style={{ fontSize: '12px',color: '#333',height: '25px',display: "flex",alignItems: "center" }}>
                                            制作方: {item.creator.nickname}
                                        </div>
                                    </div>
                                    <div className='text-lecture' >{ item.description }</div>
                                    <div style={{ marginTop: '6px' }}>
                                        <button className='button' >4545</button>
                                        <button className='button' style={{ marginLeft: '40px' }}>4545</button>
                                    </div>
                                </div>
                            </div>
                        )) : null
                }
            </div>
        )
    }
}

export default function ({type,buttonIndex}) {

    return <RightSong type={type} buttonIndex={buttonIndex}/>
}





