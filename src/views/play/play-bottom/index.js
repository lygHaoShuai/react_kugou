
import './index.scss'

function PlayBottom({img,click}) {

    return (
        <div className='play-bottom' >
            <div className='last' />
            <div className='play' onClick={click} />
            <div className='next' />
            <img src={img} className='img' />
            <div className='time'>
                <div style={{ display: "flex",justifyContent: "space-between" }}>
                    <span>454</span>
                    <div >
                        <span>454</span> /
                        <span>445</span>
                    </div>

                </div>
                <input type="range" style={{width: '372px',height: '4px'}} min="0" max="1" step="0.05"  />
            </div>
            <div className='voice' />
            <div className='circulation' />
            <div className='download ' />
            <div className='list' />
        </div>
    )
}

export default PlayBottom
