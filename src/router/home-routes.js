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
        },
        {
            path:'brand/:key',
            props:true,
            component:()=>import('../pages/home/brand/Brand'),
            children:[
                {
                    path:'detail',
                    name:'detail',
                    component:()=>import('../pages/home/brand-detail/Detail'),
                    children:[
                        {
                            path:'commentDetail/:id',
                            name:'commentDetail',
                            component:()=>import('../pages/home/brand-detail-comment/Comment')
                        }
                    ]
                }
            ]
        }
    ]
}