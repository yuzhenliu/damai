export default {
    path: "/mine",
    component: () => import("../pages/mine/root/Mine"),
    children: [{
        path: "login",
        component: () => import("../pages/mine/login/Login")
    }]
};