import UserService from "../../services/UserService";
import Util from "../../util/Util";

export default function admin ({next, router, to}) {
    if(!localStorage.getItem('username')){
        return router.push({ name:'login', query: { next: to.path } });
    }

    UserService.checkAuth(Util.getCookie('session'), localStorage.getItem('username')).then((response) => {
        const user = response[0];
        if(user.is_admin === 1){
            return next()
        } else {
            return router.push({ name:'home' });
        }
    }).catch(() => {
        return router.push({ name:'home' });
    });

}