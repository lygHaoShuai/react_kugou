import React from "react";
import { useLocation } from 'react-router-dom'
import { Carousel, } from 'react-bootstrap'

import { banner } from '../../utils/play'

import img from '../../assets/eb313037d65af76b54023e4a4fec2f57.png'

import './index.scss'

class HeadImg extends React.Component {

    state = {
        banners: []
    }

    bannerImg() {
        banner('/banner', {type:0}).then(data => {
            this.setState({banners:data.banners})
        })
    }

    bannerShow() {
        return this.state.banners.map((item, index) => (
            <Carousel.Item key={index}>
                <img style={{height: '530px', width: '100%'}} src={item.imageUrl} alt=""/>
            </Carousel.Item>
        ))
    }

    componentDidMount() {
        this.bannerImg()
    }

    render() {
        return (
            <div>
                {
                    this.props.pathname === '/home' ?

                        <Carousel>
                            {this.bannerShow()}
                        </Carousel>
                        :
                        <div />
                }
            </div>
        )
    }



}

export default function () {
    const location = useLocation()
    const { pathname } = location

    return <HeadImg pathname={pathname} />
}


