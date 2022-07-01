
import React,{ Component } from 'react';
import { chartsAllSong } from '../../../utils/play'

import './index.scss'


class RightList extends Component {

    state= {
        cities: [],
        allList: {},
        checkItem: 0
    }

    init(isTrue) {
        const checkboxAll = document.getElementById('checkboxAll')
        if(isTrue) {
            checkboxAll.checked = true
            this.state.cities.map((item,index) => {
                const checkSong = document.getElementById(`checkbox${index}`)
                checkSong.checked = true
            })
        }
    }

    checkboxAll = () => {
        const checkboxAll = document.getElementById('checkboxAll')

        if(checkboxAll.checked) {
            this.setState({
                allList: {},
                checkItem: this.state.cities.length
            },() => {
                const allList = {}
                this.state.cities.map((item,index) => {
                    allList[index] = { name:item.name,singer: item.ar[0].name,time: item.dt,id: item.id }
                    const checkSong = document.getElementById(`checkbox${index}`)
                    checkSong.checked = true
                })
                this.setState({
                    allList: allList
                })
            })

        } else {
            this.state.cities.map((item,index) => {
                const checkSong = document.getElementById(`checkbox${index}`)
                checkSong.checked = false
            })
            this.setState({
                allList: {},
                checkItem: 0
            })
        }
    }

    checkboxSong(index) {
        const item = this.state.cities[index]
        const allList = this.state.allList
        const checkItem =  this.state.checkItem
        const checkboxAll = document.getElementById('checkboxAll')
        const checkSong = document.getElementById(`checkbox${index}`)
        if(checkSong.checked) {
            allList[index] = { name:item.name,singer:item.ar[0].name,time:item.dt,id:item.id }

            this.setState({
                allList: allList,
                checkItem: checkItem +1
            },() => {
                if(this.state.cities.length === this.state.checkItem) {
                    checkboxAll.checked = true
                }
            } )

        } else {
            delete allList[index]
            this.setState({
                allList: allList,
                checkItem: checkItem -1
            },() => {
                checkboxAll.checked = false
                console.log(this.state.allList)
            })
        }

    }

    chartsSong() {
        chartsAllSong('/playlist/track/all', {
            id:this.props.chartsList[this.props.chartsIndex].id,
            limit:20}).then(data => {
            this.setState({
                cities: data.songs,
                allList: {},
            },() => {
                const allList = {}
                data.songs.map((item,index) => {
                    allList[index] = { name:item.name,singer: item.ar[0].name,time: item.dt,id: item.id }
                })
                this.setState({
                    allList: allList,
                    checkItem: this.state.cities.length
                })
            })

        })
    }

    playTime(time) {
        time = time / 1000 / 60
        return time.toFixed(2)
    }

    updateTime(time) {
        const newTime = new Date(time)

        const Year = newTime.getFullYear()
        const Month = newTime.getMonth() + 1 >= 10 ? newTime.getMonth() + 1 : `0${newTime.getMonth() + 1}`
        const Dates = newTime.getDate() >= 10 ? newTime.getDate() : `0${newTime.getDate()}`
        time = `${Year}-${Month}-${Dates}`

        return time
    }

    componentDidMount() {
        this.chartsSong()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.chartsIndex !== this.props.chartsIndex) {
            this.chartsSong()
            this.init(true)
        }
    }

    render() {
        return (
            <div >
                <div className='list-title'>
                    <div className='title-content-border'>
                        <div className='title-content' >
                            <div className='title-name'>{
                                this.props.chartsList[this.props.chartsIndex].name
                            }</div>
                            <div className='title-time'>{
                                this.updateTime (this.props.chartsList[this.props.chartsIndex].updateTime)
                            }&nbsp;更新</div>
                        </div>
                        <button className='title-button'>播放全部</button>
                    </div>
                </div>
                <div className='checkbox-content-border'>
                    <div className='checkbox-all'>
                        <input id={'checkboxAll'} type="checkbox"
                               defaultChecked={true}
                               className='checkbox' onClick={this.checkboxAll} />
                        <span style={{ marginLeft: '10px' }}>全选</span>
                    </div>
                    {
                        this.state.cities.length >= 1 ?
                            this.state.cities.map((item,index) => (
                                <div className='checkbox-option' key={index}>
                                    <div style={{ display: "flex",alignItems: "center" }}>
                                        <input id={`checkbox${index}`} type='checkbox' className='checkbox'
                                               defaultChecked={true}
                                               onClick={() => this.checkboxSong(index)} />
                                        <div style={{ marginLeft: '10px',width: '30px' }}>{ index + 1 }</div>
                                        <span className='checkbox-name'>{ item.name }</span>
                                        <span style={{ fontSize: '14px',color: '#999' }}>
                                            &nbsp;-&nbsp;{item.ar[0].name}</span>
                                    </div>
                                    <div className='checkbox-time' >{ this.playTime(item.dt) }</div>
                                </div>
                            )) : null
                    }

                </div>
            </div>
        )
    }
}

export default function ({ chartsList,chartsIndex }) {

    return <RightList chartsList={chartsList} chartsIndex={chartsIndex} />
}





