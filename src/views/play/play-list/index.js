import React,{ Component } from "react";
import './index.scss'

class PlayList extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.upTime !== this.props.upTime) {
            if(this.props.lyric[this.props.upTime]) {
                console.log(this.props.name)
                document.getElementById('time').scrollTop = this.props.musicKey.indexOf(`${this.props.upTime}`) * 25
            }
        }

    }

    render() {
        return (
            <div>
                <div style={{display: "flex"}}>
                    <div style={{flex: '1'}}>
                        <img className='singer-play-img' src={this.props.name.img} style={{
                            marginTop: '40px',width: '260px', height: '260px'
                        }} />
                    </div>
                    <div style={{flex: '2',position: "relative"}}>
                        <div style={{color: '#ffffff', marginTop: '20px'}}>
                            <div style={{fontSize: '24'}}>
                                {this.props.name.name}
                            </div>
                            <div style={{height: '24px', display: "flex", marginTop: '10px'}}>
                                <div style={{width: '250px'}}>{this.props.name.name}</div>
                                <div>{this.props.name.singer}</div>
                            </div>
                            <div className='singer-lyric' id='time'>
                                {
                                    this.props.musicKey.length >= 1 ?
                                        this.props.musicKey.map((item, index) => (

                                            <div className='lyric-item' key={index}>{this.props.lyric[item]}</div>
                                        )) : null
                                }
                            </div>
                        </div>

                        <div style={{ height: '420px',backgroundColor: '#2f343b',position: "absolute",
                            margin: '-330px 0 0 117px'}}>
                                {
                                    this.props.list.length >= 1 ?
                                        this.props.list.map((item,index) => (
                                            <div style={{ width: '470px',display: "flex",justifyContent: "center" }}>
                                                <div key={index}
                                                    style={{ width: '450px',height: '39px',display: "flex",alignItems: "center",justifyContent: "space-between",
                                                    backgroundColor: "rebeccapurple" }}>
                                                    <div>{item.name}</div>
                                                    <div>{item.singer}</div>
                                                    <div>{item.time}</div>
                                                </div>
                                            </div>
                                        )) : null
                                }


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default function ({lyric,musicKey,upTime,name,list}) {
    return <PlayList lyric={lyric} musicKey={musicKey} upTime={upTime} name={name} list={list} />
}
