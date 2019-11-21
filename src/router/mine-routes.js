export default {
    path: '/mine',
    component: () => import('../pages/mine/root/Mine'),
    children: [{
            path: 'address',
            component: () => import('../pages/mine/address/Address'),
            children: [{
                    path: 'setaddress',
                    component: () => import('../pages/mine/address/children/setAddress'),
                },
                {
                    path: 'addaddress',
                    component: () => import('../pages/mine/address/children/addAddress'),
                },
            ]

        }, {
            path: 'wantwatch',
            component: () => import('../pages/mine/root/children/wantwatch')
        },
        {
            path: 'sale',
            component: () => import('../pages/mine/root/children/sale')
        }, {
            path: 'wantperson',
            component: () => import('../pages/mine/root/children/wantperson')
        },
        {
            path: 'waitwatch',
            component: () => import('../pages/mine/root/children/aitwatch')
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
            path: 'addWatch',
            component: () => import('../pages/mine/addWatch/AddWatch')
        },
        {
            path: 'indent',
            props: true,
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