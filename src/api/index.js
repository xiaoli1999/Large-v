import http from '../libs/http.tools'

export const getJson = () => {
    return http.get('https://geo.datav.aliyun.com/areas_v2/bound/140000_full.json')
}
