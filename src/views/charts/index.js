import React,{ Component } from 'react';

import LeftNavigation from './left-navigation'
import RightList from './right-list'

import {  chartsAll } from "../../utils/play";

class Charts extends Component {

    state = {
        chartsList: [],
        chartsIndex: 0
    }

    chartIndex = (index) => {
        this.setState({
            chartsIndex: index
        })
    }

    chartsAllList() {
        chartsAll('/toplist' ).then(data => {
            this.setState({
                chartsList: data.list
            })
        })
    }

    componentDidMount() {
        this.chartsAllList()
    }

    render() {
        return (
            <div style={{ minWidth: '1000px',display: "flex",justifyContent: "center" }} >
                <div style={{ minWidth: '1000px',display: "flex",marginTop: '90px' }}>
                    <div style={{ flex: '1' }}>
                        <LeftNavigation chartsList={this.state.chartsList} chartsIndex={this.state.chartsIndex}
                                        cilck={this.chartIndex} />
                    </div>
                    <div style={{ flex: '3' }}>
                        {
                            this.state.chartsList.length >= 1 ?
                                <RightList chartsList={this.state.chartsList}
                                       chartsIndex={this.state.chartsIndex} /> : null
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default function () {

    return <Charts />
}





