import VueRouter from 'vue-router'
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import DownloadPage from "../pages/DownloadPage/DownloadPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ForgotPasswordPage from "../pages/AccountPage/ForgotPasswordPage";
import RegisterPage from "../pages/AccountPage/RegisterPage";
import ProfilePage from "../pages/AccountPage/ProfilePage";

import auth from "../middleware/Auth/auth";
import log from "../middleware/Auth/log";
import admin from "../middleware/Auth/admin";
import EditProfilePage from "../pages/AccountPage/EditProfilePage";
import NewsDetailPage from "../pages/NewsPage/NewsDetailPage";
import AddNewsPage from "../pages/NewsPage/AddNewsPage";
import EditNewsPage from "../pages/NewsPage/EditNewsPage";


const routes = [
    { path: '/about', component: AboutPage, name: 'about' },
    { path: '/', component: HomePage, name: 'home' },
    { path: '/news', component: NewsPage, name: 'news' },
    { path: '/news/add', component: AddNewsPage, name: 'add-news', meta:{ middleware: [admin] } },
    { path: '/news/:id/edit', component: EditNewsPage, name: 'edit-news', meta:{ middleware: [admin] } },
    { path: '/news/:id', component: NewsDetailPage, name: 'news-detail' },
    { path: '/download', component: DownloadPage, name: 'download' },
    { path: '/login', component: LoginPage, name: 'login' },
    { path: '/forgot-password', component: ForgotPasswordPage, name: 'forgot-password' },
    { path: '/register', component: RegisterPage, name: 'register' },
    { path: '/profile', component: ProfilePage, name: 'profile', meta:{ middleware: [log, auth] } },
    { path: '/profile/edit', component: EditProfilePage, name: 'edit-profile', meta:{ middleware: [log, auth] } },
];

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: routes,
});

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];

    if(!subsequentMiddleware){
        return context.next;
    }

    return (...parameters) => {
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index+1);
        subsequentMiddleware({...context, next: nextMiddleware});
    }
}

router.beforeEach((to, from, next) => {
    if(to.meta.middleware){
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to,
        };

        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({...context, next: nextMiddleware});
    }

    return next();
});

export default router;