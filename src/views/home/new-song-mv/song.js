import React from 'react';

import { recommendNewSong } from "../../../utils/play";
import { RightOutline,LeftOutline } from "antd-mobile-icons";
import { connect } from 'react-redux'
import {mapStateProps, mapDispatchProps} from "../../../utils/store";
import './song.scss'

import download from '../../../assets/icon_download_style2_black.png'
import play from '../../../assets/icon_play_style2_black.png'




class Song extends React.Component {

    state = {
        type: ['华语','欧美','韩国','日本'],
        pitchIndex: 0,
        start: 1,
        newSongList: [],
        newEnd: 10,
        newStart: 0
    }

    NewSong() {
        recommendNewSong('/personalized/newsong',{limit: 30}).then(data => {
            this.setState({
                newSongList: data.result
            })
        })
    }

    shewPitch(index) {
        this.setState({
            pitchIndex: index
        })
    }

    next(start) {
        this.setState({
            start: start + 1,
            newEnd: (start + 1) * 10,
            newStart: start *10
        })
    }
    last(start) {
        this.setState({
            start: start - 1,
            newEnd: (start - 1) * 10,
            newStart: (start - 2) *10
        })
    }

    songApp(item) {
        console.log(this.props)
        this.props.counterIncrement({
            name: item.name, singer: item.song.artists[0].name,
            time: item.song.duration,id: item.id
        })
    }

    newLst() {
        return this.state.newSongList.slice(this.state.newStart,this.state.newEnd).map((item,index) => (
            <div key={index} className='song-border'
                 style={{marginTop: (index > 1) ? '16px' : '0' }}>
                <div style={{ display: "flex" }} onClick={() => this.songApp(item)} >
                    <div style={{ height: '100%',width: '65px',overflow: "hidden",borderRadius: '8px' }}>
                        <img className='song-img' src={item.picUrl} />
                    </div>
                    <div className='song-text' >
                        <div style={{ width: '175px' }}>
                            <div className='song-name'>{item.song.album.name}</div>
                            <div className='song-name' style={{ color: 'rgb(0, 0, 0, 0.7)',fontSize: '12px' }}>{item.song.album.artists[0].name}</div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex",alignItems: "center" }} >
                    <img className='playDownload' src={play} alt=""/>
                    <img className='playDownload' src={download} alt=""/>
                </div>
            </div>
        ))
    }

    componentDidMount() {
        this.NewSong()
    }

    render() {
        return (
            <div style={{ width: '95%' }} >
                <div>
                    <div className='song-all'>
                        <div className='title'>新歌首发</div>

                        <div style={{ display: "flex",width: '304px',justifyContent: "space-between" }}>
                            {
                                this.state.type.map((item,index) => (
                                    <div className={[this.state.pitchIndex === index ? 'pitch' : '']}
                                         style={{ padding: '0 15px' }} key={index}
                                         onMouseOver={() => this.shewPitch(index)}>
                                        { item }
                                    </div>
                                ))
                            }
                        </div>

                        <div >
                            {
                                this.state.start >= 2 ?
                                <LeftOutline onClick={() => this.last(this.state.start)} className='start-song' /> :
                                    <LeftOutline style={{ color: '#bbbbbb' }} />

                            }
                            &nbsp;
                            <span style={{ cursor: "default" }}>{this.state.start}/3</span>
                            &nbsp;
                            {
                                this.state.start <= 2 ?
                                    <RightOutline onClick={() => this.next(this.state.start)} className='start-song' /> :
                                    <RightOutline style={{ color: '#bbbbbb' }} />

                            }
                        </div>
                    </div>
                    <div style={{ display: "flex",flexWrap: "wrap",justifyContent: "space-between" }}>
                        {
                            this.newLst()
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const Songs = connect(mapStateProps, mapDispatchProps)(Song)

export default function () {
    return <Songs />
}

