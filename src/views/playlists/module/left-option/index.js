
import React,{ Component } from 'react';

import './index.scss'

class LeftOption extends Component {
    indexItem(index) {
        this.props.click(index)
    }
    render() {
        return (
            <div >
                {
                    this.props.type.map((item,index) => (
                        <div style={{ height: '36px',marginTop: ( index > 0 ? '20px' : '') }} key={index} >
                            <button onClick={() => this.indexItem(index)}
                                className={`bottom ${this.props.buttonIndex === index ? 'active' : ''} `} >{ item }</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default function ({type,buttonIndex, click}) {

    return <LeftOption type={type} buttonIndex={buttonIndex} click={click}   />
}





