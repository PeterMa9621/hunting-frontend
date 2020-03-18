import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/news';

class NewsService {
    static getNews(){
        return new Promise((resolve, reject) => {
            axios.get(url).then((response) => {
                const data = response.data;

                resolve(data.map(news => ({
                    ...news,
                    created_at: new Date(news.created_at).toLocaleString(),
                    updated_at: new Date(news.updated_at).toLocaleString()
                })));
            }).catch(reason => {
                reject(reason);
            });
        })
    }
}

export default NewsService;
