import axios from "axios";
// import store from '../store'

export const baseURL = 'http://localhost:4000/'

const instance = axios.create({
    baseURL,
    timeout: 5000
})

instance.interceptors.request.use(config => {
    // const { profile } = store.state.user
    // if(profile.cookie) {
    //     config.headers['Authorization'] = `xsrfCookieName ${profile.cookie}`
    // }
    // console.log(config)
    return config
},err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(res => res.data,err => {
    if (err.response && err.response.status === 401) {

    }
    return Promise.reject(err)
})


export default (url,method,submitData) => {
    return instance({
        url,method,
        [method.toLowerCase() === 'get'? 'params' : 'data'] : submitData
    })
}
