
import {RightOutline} from "antd-mobile-icons";
import './index.scss'

function HeadChildAll({ titleName,onClick }) {
    const pushLink = () => {
        onClick()
    }
    return (
        <div >
            <div className='child-all'>
                <div className='title'>{titleName}</div>
                <div className='all' onClick={pushLink}>
                    更多
                    <RightOutline />
                </div>
            </div>
        </div>
    )
}

export default HeadChildAll
