export default {
    path: '/all/:classify',
    props: true,
    component: () => import('../pages/all/root/All'),
    children: [{
        path: 'detail/:id',
        props: true,
        component: () => import('../pages/all/detail/Detail'),
    }, ]
}