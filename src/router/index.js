import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: "/hello",
        name: "hello",
        component: () => import("../components/HelloWorld.vue")
    },
    {
        path: "/",
        name: "home",
        component: () => import("../components/Home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../components/Login.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../components/Register.vue")
    },
    {
        path: "/student",
        name: "student",
        component: () => import("../components/StudentList.vue")
    },
    {
        path: "/nav",
        name: "nav",
        component: () => import("../components/Nav.vue")
    },
    {
        path: "/content",
        name: "content",
        component: () => import("../components/Content.vue")
    },
    {
        path: "/test",
        name: "test",
        component: () => import("../components/test.vue")
    },
    {
        path: "/user",
        name: "user",
        component: () => import("../components/UserList.vue")
    },
    {
        path: "/chart",
        name: "chart",
        component: () => import("../components/test_echarts.vue")
    },
    {
        path: "/score",
        name: "score",
        component: () => import("../components/ScoreList.vue")
    }, {
        path: "/neo4j",
        name: "neo4j",
        component: () => import("../components/test_neo4j.vue")
    },

]
const index = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
});
export default index;
