import React,{ Component } from 'react';
import { useNavigate } from "react-router-dom";
import HeadChildAll from '../../../components/head-child-all'
import ImgBorder from '../../../components/img-border'

import {playlist} from "../../../utils/play";


import './playlists.scss'

class Playlists extends Component {

    state = {
        playlists: [],
        imgBorderShow: false,
        lastImgShow: null
    }

    playlistDate() {
        playlist('/top/playlist/highquality', {limit:5}).then(data => {
            this.setState({
                playlists: data.playlists
            })
        })
    }

    lastChild() {
        return this.state.playlists.slice(1,5).map((item,index) => (
            <div key={index}>
                <div className='last-img-border' onMouseEnter={() => this.lastBorderShow(index)} onMouseLeave={() => this.lastBorderHide()} >
                    <img className='last-child-img' src={item.coverImgUrl} />

                    {
                        this.state.lastImgShow === index ? <ImgBorder height={130} size={50} /> : null
                    }


                </div>
                <div className='last-child-text'>{ item.name }</div>
            </div>
        ))
    }

    firstBorderShow() {
        this.setState({
            imgBorderShow: true
        })
    }

    firstBorderHide() {
        this.setState({
            imgBorderShow: false
        })
    }

    lastBorderShow(index) {
        this.setState({
            lastImgShow: index
        })
    }

    lastBorderHide() {
        this.setState({
            lastImgShow: null
        })
    }

    routerLink(history) {
        this.props.history(history)
    }

    componentDidMount() {
        this.playlistDate()
    }

    render() {
        return (
            <div style={{width: '95%'}}  >
                <HeadChildAll titleName={'精选歌单'} onClick={() => this.routerLink('/play/list')}  />
                <div style={{height: '362px'}}>
                    {
                        this.state.playlists.length >= 1 ?
                            <div className='playlists-content'>
                                <div  style={{width: '320px'}}>
                                    <div className='first-img-border' onMouseEnter={() => this.firstBorderShow()} onMouseLeave={() => this.firstBorderHide()} >
                                        <img className='first-child-img' src={this.state.playlists[0].coverImgUrl} />

                                        {
                                            this.state.imgBorderShow ? <ImgBorder height={310} size={100} /> : null
                                        }

                                    </div>
                                    <div style={{ marginTop: '10px',cursor: "pointer" }}>{ this.state.playlists[0].name }</div>
                                </div>
                                <div className='last-child'>
                                    { this.lastChild() }
                                </div>
                            </div> : null
                    }
                </div>
            </div>
        )
    }
}

export default function () {

    const history = useNavigate()

    return <Playlists history={history} />
}



