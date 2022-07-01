
import React from "react";
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom'

import Home from './views/home'
import Playlist from './views/playlists'
import Charts from './views/charts'
import Play from './views/play'

import HeadBorder from './components/head-border'
import HeadLabel from './components/head-label'
import HeadImg from './components/head-img'

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

    jj = () => {
        let path = '/play/454545'
        const newWindow = window.open('_black') //这里是打开新窗口
        newWindow.location.href = path //这样就可以跳转了
    }


    componentDidMount() {

        window['listDataIndex'] = (val) => {
            console.log(val)
        }
    }


    render() {

        return (
            <Router>
                <div style={{position: "relative"}}>
                    {/*Home 组件是父路由的内容 */}
                    <HeadBorder/>
                    <div style={{
                        position: "absolute", display: "flex", justifyContent: "center",
                        height: '60px', alignItems: "center", minWidth: '1000px', zIndex: '100',
                        backgroundColor: 'rgba(122, 122, 122, 0.2)', width: '100% '
                    }}>
                        <HeadLabel/>
                    </div>
                    <HeadImg/>
                    <Routes>
                        <Route path="/*" exact element={<Navigate to="/home"/>}/>
                        <Route path="/home" element={<Home/>}  />
                        <Route path="/play/list" element={<Playlist/>}/>
                        <Route path="/charts" element={<Charts/>}/>
                        <Route path="/play/:id" element={<Play/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App
