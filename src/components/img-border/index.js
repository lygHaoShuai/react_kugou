
import './index.scss'
import img from '../../assets/icon_play_white.png'

export default function HeadChildAll({height,size}) {
    return (
        <div className='img-borders'
             style={{ height: `${height}px` ,marginTop: `-${height}px` }}>
            <img src={img} alt="" style={{ height: `${size}px`,width: `${size}px` }}/>
        </div>
    )
}
