import React,{ Component } from 'react';

import { hotSinger } from "../../../utils/play";
import { RightOutline } from "antd-mobile-icons";

import './index.scss'

class HotSinger extends Component {

    state = {
        type: ['华语','欧美','韩国','日本'],
        pitchIndex: 0,
        singer: []
    }

    HotSinger() {
        hotSinger('/toplist/artist',{type:this.state.pitchIndex + 1}).then(data => {
            this.setState({
                singer: data.list.artists
            })
        })
    }

    shewPitch(index) {
        this.setState(
            { pitchIndex: index },
            this.HotSinger )
    }

    componentDidMount() {
        this.HotSinger()
    }
    componentDidUpdate(  ) {

    }

    render() {
        return (
            <div >
                <div>
                    <div className='singer-all'>
                        <div style={{ display: "flex" }}>
                            <div className='title'>热门歌手</div>

                            <div style={{ display: "flex",width: '290px',marginLeft: '35px',
                                justifyContent: "space-between",alignItems: "center" }}>
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
                        </div>
                        <div className='all'>
                            更多
                            <RightOutline />
                        </div>
                    </div>
                    <div style={{ height: '170px' }}>
                        {
                            this.state.singer.length >= 1 ?
                                <div style={{ display: "flex",justifyContent: "space-between" }}>
                                    {
                                        this.state.singer.slice(0,5).map((item,index) => (
                                            <div style={{ width: '140px',cursor: "pointer" }} key={index}>
                                                <div className='img-border'>
                                                    <img className='singer-img' src={item.picUrl}/>
                                                </div>
                                                <div style={{ display: "flex",justifyContent: "center",marginTop: '8px' }}>{item.name}</div>
                                            </div>
                                        ))
                                    }
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default function () {

    return <HotSinger />
}



