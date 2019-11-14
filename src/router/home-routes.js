export default {
    path: '/home',
    component: () => import('../pages/home/root/Home'),
    children:[
        {
            path:'city',
            component:()=>import('../pages/home/city/City')
        },
        {
            path:'search',
            component:()=>import('../pages/home/search/Search')
        }
    ]
}