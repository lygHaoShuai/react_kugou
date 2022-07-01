import React,{ Component } from "react";
import { Button } from 'react-bootstrap'
import { SearchOutline } from 'antd-mobile-icons'

import logo from '../../assets/kugou_white.png'

import './index.scss'

class headBorder extends Component {

    state= {
        value: ''
    }

    inputChange(e) {
        console.log(e.target.value)
    }

    inputChang(e) {
        console.log(e.target.value)
    }


    render() {
        return (
            <div className='border-border'>
                <div className='head-border'  >
                    <div className='head-img'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='head-search'>
                        {/*<Input />*/}
                        <input onKeyDown={(e) => this.inputChang(e)}
                            onChange={(e) =>this.inputChange(e)}
                            placeholder="input with clear icon"
                               style={{outline: "none"}}/>
                        <SearchOutline />
                    </div>
                    <div className='head-text' >音乐人</div>
                    <div className='head-text'>主播电台</div>
                    <div className='head-text'>开放平台</div>
                    <div className='head-text'>VIP会员</div>
                    <div className='head-text'>|</div>
                    <div>
                        <Button size="small" style={{ padding: '0 27px',backgroundColor: '#ffffff',height: '25px',
                            borderRadius: '50px',color: '#00A9FF' }}>
                            <span style={{ fontSize: '13px' }}>登录</span>
                        </Button>
                        {/*<Button variant="outline-light">Light</Button>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default headBorder
