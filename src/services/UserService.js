import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/users';

class UserService {
    static getUser(){
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
        })
    }
}

export default UserService;
