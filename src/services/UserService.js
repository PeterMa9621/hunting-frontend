import axios from 'axios';
import User from "../model/User";

const url = 'http://localhost:8000/api/users/';

class UserService {
    static getUsers(){
        return new Promise((resolve, reject) => {
            axios.get(url).then((response) => {
                const data = response.data;

                resolve(data.map(user => ({
                    ...user,
                    created_at: new Date(user.created_at).toLocaleString(),
                    updated_at: new Date(user.updated_at).toLocaleString(),
                })));
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    static getUser(username){
        return new Promise((resolve, reject) => {
            axios.get(url + username).then((response) => {
                const data = response.data;
                resolve(data.map(user => (new User({
                    ...user,
                    created_at: new Date(user.created_at).toLocaleString(),
                    updated_at: new Date(user.updated_at).toLocaleString(),
                }))));
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    static login(username, password){
        console.log("Login start");
        const startTime = new Date();

        return new Promise((resolve, reject) => {
            axios.post(url + 'login/', {
                username: username,
                password: password
            }).then((response) => {
                const data = response.data;

                const users = data.map(user => (new User({
                    ...user,
                    created_at: new Date(user.created_at).toLocaleString(),
                    updated_at: new Date(user.updated_at).toLocaleString(),
                })));
                resolve(users);

                const endTime = new Date();
                console.log("Finish login request");
                console.log("Time used", Math.abs(startTime - endTime));
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    static checkAuth(session, username){
        return new Promise((resolve, reject) => {
            axios.post(url + 'auth/', {
                session: session,
                username: username
            }).then((response) => {
                const data = response.data;

                const users = data.map(user => (new User({
                    ...user,
                    created_at: new Date(user.created_at).toLocaleString(),
                    updated_at: new Date(user.updated_at).toLocaleString(),
                })));
                resolve(users);
            }).catch((error) => {
                reject(error);
            })
        });
    }

    static addUser(doc){
        return new Promise((resolve, reject) => {
            axios.post(url, doc).then((response) => {
                const data = response.data;
                resolve(data);
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    static updateUser(username, doc){
        return new Promise((resolve, reject) => {
            axios.put(url + username, doc).then((response) => {
                const data = response.data;
                resolve(data);
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    static logout(){
        localStorage.removeItem('username');
    }
}

export default UserService;
