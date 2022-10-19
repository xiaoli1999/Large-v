import http from '../libs/http.tools'

export const getJson = () => {
    return http.get('house')
}
