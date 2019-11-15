export default {
    path: '/all',
    props: true,
    component: () => import('../pages/all/root/All'),
    children: [{
        path: 'detail/:id',
        props: true,
        component: () => import('../pages/all/detail/Detail'),
    }, ]
}