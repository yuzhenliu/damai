export default {
    path: '/mine',
    component: () => import('../pages/mine/root/Mine'),
    children: [{
            path: 'address',
            component: () => import('../pages/mine/address/Address')
        },
        {
            path: 'service',
            component: () => import('../pages/mine/service/Service')
        },
        {
            path: 'watch',
            component: () => import('../pages/mine/watch/Watch')
        },
        {
            path: 'indent',
            component: () => import('../pages/mine/indent/Indent')
        },
        {
            path: 'purse',
            component: () => import('../pages/mine/purse/Purse')
        },
        {
            path: 'times',
            component: () => import('../pages/mine/times/Times')
        },
        {
            path: 'install',
            component: () => import('../pages/mine/install/Install')
        },
        {
            path: 'massage',
            component: () => import('../pages/mine/massage/Massage')
        },
    ]
}