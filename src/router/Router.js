import VueRouter from 'vue-router'
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";

const routes = [
    { path: '/about', component: AboutPage },
    { path: '/', component: HomePage }];

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: routes
});

export default router;