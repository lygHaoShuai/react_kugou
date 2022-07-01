import React,{ Component } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import './index.scss'

const item = [
    {name:'首页',history:'home'},{name:'歌单',history:'play/list'},
    {name:'榜单',history:'charts'},{name:'MV',history:'mv'},
    {name:'电台',history:'dj'},{name:'歌手',history:'singer'},
    {name:'专辑',history:'album'}]

class HeadLabel extends Component {
    state = {
        pitchIndex: 0
    }

    pitchIndex(index,history) {
        this.setState({pitchIndex:index})
        this.props.history(history)
    }

    headItem() {
        return (
            item.map((item,index) => (
                <div key={index} className={[this.state.pitchIndex === index ? 'pitch' : '']}
                onClick={() => this.pitchIndex(index,item.history)} > { item.name } </div>
            ))
        )
    }

    componentDidMount() {
        item.map((item,index) => {
            if(`/${item.history}` === this.props.pathname) {
                this.setState({
                    pitchIndex: index
                })
            }
        })
    }

    render() {
        return (
            <div className='label-border'>
                <div className='head-label'>
                    {this.headItem()}
                </div>
            </div>
        )
    }
}

export default function () {
    const history = useNavigate()
    const location = useLocation()
    const { pathname } = location
    return <HeadLabel history={history} pathname={pathname} />
}
