import VueRouter from 'vue-router'
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import DownloadPage from "../pages/DownloadPage/DownloadPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ForgotPasswordPage from "../pages/AccountPage/ForgotPasswordPage";
import RegisterPage from "../pages/AccountPage/RegisterPage";

const routes = [
    { path: '/about', component: AboutPage },
    { path: '/', component: HomePage },
    { path: '/news', component: NewsPage },
    { path: '/download', component: DownloadPage },
    { path: '/login', component: LoginPage },
    { path: '/forgot-password', component: ForgotPasswordPage },
    { path: '/register', component: RegisterPage },
];

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: routes
});

export default router;