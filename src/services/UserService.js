import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/users/';

class UserService {
    static getUsers(){
        return new Promise((resolve, reject) => {
            axios.get(url).then((response) => {
                const data = response.data;

                resolve(data.map(user => ({
                    ...user,
                    created_at: new Date(user.created_at).toLocaleString()
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

    static login(username, password){
        console.log("Login start");
        const startTime = new Date();

        return new Promise((resolve, reject) => {
            axios.post(url + 'login/', {
                username: username,
                password: password
            }).then((response) => {
                const data = response.data;
                resolve(data);

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
                resolve(response.data);
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
}

export default UserService;
