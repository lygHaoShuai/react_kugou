import React from 'react';
import HeadChildAll from "../../../components/head-child-all";

import {recommendMV} from "../../../utils/play";

import ImgBorder from '../../../components/img-border'

import './song.scss'

class MV extends React.Component {
    state = {
        MVList: [],
        firstMVShow: false,
        lastMVShow: null
    }

    recommendMV() {
        recommendMV('/personalized/mv').then(data => {
            this.setState({
                MVList: data.result
            })
        })
    }
    MVChile() {
        return this.state.MVList.slice(1,3).map((item,index) => (
            <div style={{ width: '152px',cursor: "pointer" }} key={index}>
                <div className='last-img-border' onMouseEnter={() => this.lastMVShow(index)} onMouseLeave={() => this.lastMVHide()} >
                    <img className='last-mv-img' src={item.picUrl} />

                    {
                        this.state.lastMVShow === index ? <ImgBorder height={84} size={50} /> : null
                    }


                </div>
                <div style={{ marginTop: '6px' }}>
                    <div>{ item.artistName }</div>
                    <div style={{ fontSize: '12px',whiteSpace: "nowrap",overflowX: "hidden",
                        marginTop: '6px',textOverflow: "ellipsis" }}>{ item.name }</div>
                </div>
            </div>
        ))
    }

    firstMVShow() {
        this.setState({
            firstMVShow: true
        })
    }

    firstMVHide() {
        this.setState({
            firstMVShow: false
        })
    }

    lastMVShow(index) {
        this.setState({
            lastMVShow: index
        })
    }

    lastMVHide() {
        this.setState({
            lastMVShow: null
        })
    }

    componentDidMount() {
        this.recommendMV()
    }

    render() {
        return (
            <div style={{ width: '100%' }} >
                <div>
                    <HeadChildAll titleName={'推荐MV'} />
                    <div style={{ height: '400px'}} >
                        {
                            this.state.MVList.length >= 1 ?
                                <div>
                                    <div style={{height: '250px',cursor: "pointer" }}>
                                        <div className='first-img-border' onMouseEnter={() => this.firstMVShow()} onMouseLeave={() => this.firstMVHide()} >
                                            <img className='first-mv-img' src={this.state.MVList[0].picUrl} />

                                            {
                                                this.state.firstMVShow ? <ImgBorder height={180} size={70} /> : null
                                            }

                                        </div>
                                        <div style={{ marginTop: '6px' }} >
                                            <div >{ this.state.MVList[0].artistName }</div>
                                            <div style={{ fontSize: '12px',width: '320px',whiteSpace: "nowrap",
                                            overflowX: "hidden",textOverflow: "ellipsis"}}>
                                                { this.state.MVList[0].name }</div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex",justifyContent: "space-between",
                                        marginTop: '10px',height: '140px' }}>
                                        { this.MVChile() }
                                    </div>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default function () {

    return <MV />
}



