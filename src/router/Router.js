import VueRouter from 'vue-router'
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import DownloadPage from "../pages/DownloadPage/DownloadPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ForgotPasswordPage from "../pages/AccountPage/ForgotPasswordPage";
import RegisterPage from "../pages/AccountPage/RegisterPage";

const routes = [
    { path: '/about', component: AboutPage, name: 'about' },
    { path: '/', component: HomePage, name: 'home' },
    { path: '/news', component: NewsPage, name: 'news' },
    { path: '/download', component: DownloadPage, name: 'download' },
    { path: '/login', component: LoginPage, name: 'login' },
    { path: '/forgot-password', component: ForgotPasswordPage, name: 'forgot-password' },
    { path: '/register', component: RegisterPage, name: 'register' },
];

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: routes
});

export default router;