export default {
    path: '/find',
    component: () => import('../pages/find/root/Find'),
    children: [
        {
            path: 'video/:videoId',
            component: () => import('../pages/find/VideoPage/VideoPage'),
        }
    ]
}