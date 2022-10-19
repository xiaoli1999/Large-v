export default [
    {
        path: '/Home',
        name: 'Home',
        meta: {},
        component: () => import(/* webpackChunkName: "Home" */'../views/Home.vue')
    },
    {
        path: '*',
        redirect: '/Home',
        meta: {}
    }
]
