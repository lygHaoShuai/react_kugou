import React from 'react';
import HeadChildAll from "../../../components/head-child-all";
import ImgBorder from '../../../components/img-border'

import './charts.scss'
import {charts} from "../../../utils/play";
import {useNavigate} from "react-router-dom";

class Charts extends React.Component {
    state = {
        chartsList: [],
        chartsImgBorder: null
    }

    chartsData() {
        charts('/toplist/detail').then(data => {
            this.setState({
                chartsList: data.list
            })
        })
    }

    chartsList() {
        return this.state.chartsList.slice(0,3).map((item,index) => (
            <div className='charts-class' key={index}>
                <div className='charts-img-border' onMouseEnter={() => this.chartsBorderShow(index)} onMouseLeave={() => this.chartsBorderHide()}>
                    <img className='charts-img' src={item.coverImgUrl} />

                    {
                        this.state.chartsImgBorder === index ? <ImgBorder height={110} top={-110} size={50} /> : null
                    }


                </div>
                <div className='charts-text'>
                    <div>
                        {
                            item.tracks.map((song,songIndex) => (
                                <div key={songIndex} className='charts-song' >
                                    <span style={{fontWeight: "bold"}}>{ songIndex+1 }.</span>
                                    &nbsp;
                                    <span>{ song.second }</span>-
                                    <span>{ song.first }</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        ))
    }

    chartsBorderShow(index) {
        this.setState({
            chartsImgBorder: index
        })
    }

    chartsBorderHide() {
        this.setState({
            chartsImgBorder: null
        })
    }

    routerLink(history) {
        this.props.history(history)

    }

    componentDidMount() {
        this.chartsData()
    }

    render() {
        return (
            <div >

                <div>
                    <HeadChildAll titleName={'热门榜单'} onClick={() => this.routerLink('/charts')} />
                    <div className='charts-content'>
                        { this.chartsList() }
                    </div>
                </div>
            </div>
        )
    }
}

export default function () {

    const history = useNavigate()

    return <Charts history={history} />
}



