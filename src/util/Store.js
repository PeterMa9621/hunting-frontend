import Util from './Util';
import UserService from "../services/UserService";
import User from "../model/User";


function clearAuthData(state, router=null) {
    delete localStorage['username'];
    Util.removeCookie('session');
    state.user = {};
    if(router!=null)
        router.push({name:'login'});
}

const storeOption = {
    state: {
        user: new User({})
    },
    mutations: {
        setUser(state, user){
            state.user = user;
            console.log(state.user);
        },
        checkAuth(state, {router}){
            const sessionId = Util.getCookie('session');
            const username = localStorage['username'];
            // Check if the user have both username and session id
            if(sessionId!=null && username!=null){
                state.user.username = username;
                //console.log('Have session:', sessionId, ", username:", username);
                // Check from server
                UserService.checkAuth(sessionId, username).then((response) => {
                    state.user = response[0];
                    console.log('Auth passed!');
                }).catch((error) => {
                    console.log(error.data);
                    clearAuthData(state, router);
                });
            } else {
                clearAuthData(state);
            }
        },
        clearUser(state, router) {
            clearAuthData(state, router);
        }
    },
    actions: {
    }
};

export default storeOption;