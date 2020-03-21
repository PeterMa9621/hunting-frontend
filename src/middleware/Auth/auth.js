/*
    Each middleware will have same parameters
 */
export default function auth ({next, router, to}) {
    if(!localStorage.getItem('username')){
        return router.push({ name:'login', query: { next: to.path } });
    }
    return next();
}