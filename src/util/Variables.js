class GlobalVariable {
    static user;

    static getUser(){
        return this.user;
    }

    static setUser(user){
        this.user = user;
    }
}

 export default GlobalVariable;