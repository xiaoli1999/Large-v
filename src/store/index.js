import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Device from './modules/Device'
import Menu from './modules/Menu'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: { Device, Menu },
    state: {

    },
    mutations: {
        setState (state, payload) {
            const [obj, key, value] = payload
            if (payload.length === 3) {
                if (state[obj]) {
                    state[obj][key] = value
                }
            } else {
                state[obj] = key
            }
        }
    },
    plugins: [createPersistedState({
        // paths: ['SysInfo', 'UserInfo', 'RecordTabShow']
    })]
})
