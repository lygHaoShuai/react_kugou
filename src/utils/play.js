import request from './request'

//轮播图
export const banner = (url,data) => {
    return request(url, 'get',data)
}
//歌单精品
export const playlist = (url,data) => {
    return request(url, 'get',data)
}
//所有歌单
export const songAll = (url,data) => {
    return request(url, 'get', data)
}
//榜单内容摘要
export const charts = (url) => {
    return request(url, 'get')
}
//所有榜单
export const chartsAll = (url) => {
    return request(url, 'get')
}
//所有榜单歌曲
export const chartsAllSong = (url,data) => {
    return request(url, 'get',data)
}
//推荐MV
export const recommendMV = (url) => {
    return request(url, 'get')
}
//推荐新歌
export const recommendNewSong = (url,data) => {
    return request(url, 'get',data)
}
//热门电台
export const hotDj = (url,data) => {
    return request(url, 'get', data)
}
//热门歌手
export const hotSinger = (url,data) => {
    return request(url, 'get', data)
}
//获取歌词
export const lyric = (url,data) => {
    return request(url, 'get', data)
}
//获取音乐
export const songUrl = (url,data) => {
    return request(url, 'get', data)
}
//音乐详情
export const player = (url,data) => {
    return request(url, 'get', data)
}




