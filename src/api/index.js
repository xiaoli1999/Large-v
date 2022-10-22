// import http from '../libs/http.tools'
import axios from 'axios'

export const getJson = () => {
    // https://geo.datav.aliyun.com/areas_v2/bound/140000_full.json
    return axios.get('shanxi.json')
}
