
export default function admin ({next, router, to}) {
    if(!localStorage.getItem('username')){
        return router.push({ name:'login', query: { next: to.path } });
    }

    if(this.$store.state.user.is_admin === 1){
        return next();
    } else {
        return router.push({ name:'home' });
    }

}