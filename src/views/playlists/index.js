import React,{ Component } from 'react';

import LeftOption from './module/left-option'
import RightSong from './module/right-song'

class Playlist extends Component {

    state = {
        type: ['华语','欧美','古风','摇滚','流行','影视原声'],
        buttonIndex: 0,
        scrollTop: 0
    }

    onClick = (value) => {
        this.setState({
            buttonIndex: value
        })
    }

    handleScroll = () => {
        this.setState({
            scrollTop: window.scrollY
        })
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
    }

    render() {
        return (
            <div style={{ marginTop: '90px',display: "flex",justifyContent: "center",minWidth: '1000px' }} >
                <div style={{ width: '1000px',display: "flex",position: "relative"}}>
                    <div style={{ width: '210px' }} />
                    <div style={{ width: '210px',position: "absolute",marginTop: `${this.state.scrollTop}px` }}>
                        <LeftOption type={this.state.type} buttonIndex={this.state.buttonIndex} click={this.onClick} />
                    </div>
                    <div style={{ width: '770px',marginLeft: '20px' }}>
                        <RightSong type={this.state.type} buttonIndex={this.state.buttonIndex} />
                    </div>

                </div>

            </div>
        )
    }
}

export default function () {

    return <Playlist />
}





