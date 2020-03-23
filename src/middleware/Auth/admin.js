import UserService from "../../services/UserService";

// https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export default function admin ({next, router, to}) {
    if(!localStorage.getItem('username')){
        return router.push({ name:'login', query: { next: to.path } });
    }

    console.log(getCookie('session'));
    UserService.checkAuth(getCookie('session'), localStorage.getItem('username')).then((response) => {
        console.log(response[0]);
        if(response[0].is_admin !== 1){
            return router.push({ name:'home' });
        } else {
            return next();
        }
    }).catch((error) => {
        console.log(error);
        return router.push({ name:'login' });
    });

}