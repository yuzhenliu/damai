export default {
    path: '/all',
    props: true,
    component: () => import('../pages/all/root/All'),
    children: [
        {
        path: 'detail/:id',
        props: true,
        component: () => import('../pages/all/detail/Detail'),
        children: [
            {
                path: 'location',
                component: () => import('../pages/all/location/Location'),
            },
            {
                path: 'serve',
                props: true,
                component: () => import('../pages/all/serve/Serve'),
            },
            {
                path: 'seat',
                props: true,
                component: () => import('../pages/all/seat/Seat'),
            },
            {
                path: 'submitOrder',
                component: () => import('../pages/all/submitOrder/SubmitOrder'),
            }
            
        ]
        }, 
    ]
}