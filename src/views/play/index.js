import React from 'react';
import PlayList from "./play-list";
import PlayBottom from "./play-bottom";
import { lyric,songUrl,player } from "../../utils/play";

import { connect } from 'react-redux'
import {mapStateProps, mapDispatchProps} from "../../utils/store";

class Play extends React.Component {
    jj() {
        window.opener.listDataIndex({kklkl:45454})
    }

    state = {
        url: '',
        newTime: 0,
        lyric: {},
        timeKey: [],
        name: {
            singer: '',
            img: '',
            name: ''
        }
    }

    lyric() {

        lyric('/lyric',{id: 33894312}).then(data => {
            let musicLyric = {}
            const lyric = /\[([^\]]+)\]([^\[]+)/g;

            data.lrc.lyric.replace(lyric, (all, time, lyric) => {
                const newTime = time.split(':')
                let Time = Number(newTime[0] * 60 + Number(newTime[1]))
                Time = Math.floor(Time)
                lyric = lyric.substring(0,lyric.length-1)
                if(lyric.length >= 1) {
                    musicLyric[Time] = lyric
                }
            })

            this.setState({
                lyric: musicLyric,
                timeKey: Object.keys(musicLyric)
            })

        })
        songUrl('/song/url',{id: 33894312}).then(data => {
            console.log(data)
            this.setState({
                url: data.data[0].url
            })
        })
        player('/song/detail', {ids: 33894312}).then(data => {
            console.log(data.songs[0])
            this.setState({
                name: {
                    singer: data.songs[0].ar[0].name,
                    img: data.songs[0].al.picUrl,
                    name: data.songs[0].name
                }
            })
        })

    }


    upTime = (e) => {
        const time = Math.round(e.target.currentTime)
        this.setState({
            newTime: time
        })
    }




    startEnd = () => {
        const audio = document.getElementById('audio')
        if(!audio.paused) {
            audio.pause()

        } else {
            audio.play()
        }
    }


    componentDidMount() {
        this.lyric()
    }

    render() {
        return (
            <div style={{ marginTop: '60px',display: "flex",justifyContent: "center",position: "relative",
                backgroundColor: '#443F2F',minWidth: '1000px' }} >
                <audio id="audio" src={this.state.url} onTimeUpdate={this.upTime} autoPlay={'autoPlay'} >
                Your browser does not support the audio element.
                </audio>

                <div>
                </div>
                <div style={{ width: '1000px',height: '565px'}}>
                    <div>
                        <PlayList lyric={this.state.lyric}
                                  musicKey={this.state.timeKey}
                                  upTime={this.state.newTime}
                                  name={this.state.name}
                                  list={this.props.counter.list}/>
                    </div>
                    <div style={{ bottom: '0px',position: "absolute" }} >
                        <PlayBottom img={this.state.name.img} click={this.startEnd} />
                    </div>
                </div>

            </div>
        )
    }
}

const Plays = connect(mapStateProps, mapDispatchProps)(Play)

export default function () {

    return <Plays />
}



