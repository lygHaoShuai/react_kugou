
import React,{ Component } from 'react';

import './index.scss'


class LeftNavigation extends Component {

    chartIndex(index) {
        this.props.cilck(index)
        window.scrollTo(0,0)
    }

    chartsShow() {

        return (this.props.chartsList.map((item,index) => (

                <div className={`navigation-align ${this.props.chartsIndex === index ? 'active' : ''}`} key={index} onClick={() => this.chartIndex(index)} >
                    <img className='navigation-img' src={item.coverImgUrl} />
                    <div className='navigation-text' >{ item.name }</div>
                </div>

        )))
    }


    render() {
        return (
            <div>
                 <div className='navigation-border' >
                    {
                        this.props.chartsList.length >= 1 ?
                            this.chartsShow() : null
                    }
                </div>
            </div>
        )
    }
}

export default function ({chartsList,cilck,chartsIndex}) {

    return <LeftNavigation chartsList={chartsList} cilck={cilck} chartsIndex={chartsIndex} />
}





