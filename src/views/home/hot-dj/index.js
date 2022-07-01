import React,{Component} from 'react';
import HeadChildAll from "../../../components/head-child-all";

import {hotDj} from "../../../utils/play";

import ImgBorder from '../../../components/img-border'
import './index.scss'

class HotDj extends Component {
    state = {
        hotDjList: [],
        djImgShow: null
    }

    hotDJ() {
        hotDj('/dj/hot',{limit: 6}).then(data => {
            this.setState({
                hotDjList: data.djRadios
            })
        })
    }

    djImgShow(index) {
        this.setState({
            djImgShow: index
        })
    }

    djImgHide() {
        this.setState({
            djImgShow: null
        })
    }


    componentDidMount() {
        this.hotDJ()
    }

    render() {
        return (
            <div style={{ width: '100%' }} >
                <div>
                    <HeadChildAll titleName={'热门电台'} />
                    <div style={{ height: '200px' }} >
                        {
                            this.state.hotDjList.length >= 1 ?
                                <div style={{ display: "flex",justifyContent: "space-between" }}>
                                    {
                                        this.state.hotDjList.map((item,index) => (
                                            <div style={{ width: '150px' }} key={index}>
                                                <div className='dj-img-border' onMouseEnter={() => this.djImgShow(index)} onMouseLeave={() => this.djImgHide()} >
                                                    <img className='dj-img' src={ item.picUrl }/>

                                                    {
                                                        this.state.djImgShow === index ? <ImgBorder height={150} size={50}  /> : null
                                                    }
                                                </div>
                                                <div style={{ whiteSpace: "nowrap",overflowX: "hidden",textOverflow: "ellipsis",
                                                fontSize: '14px',marginTop: '6px'}}>{ item.copywriter }</div>
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

    return <HotDj />
}



