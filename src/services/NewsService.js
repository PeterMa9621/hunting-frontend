import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/news/';

class NewsService {
    static getNews(id = null){
        let newsUrl = url;
        if(id!=null)
            newsUrl += id;
        return new Promise((resolve, reject) => {
            axios.get(newsUrl).then((response) => {
                const data = response.data;

                resolve(data.map(news => ({
                    ...news,
                    created_at: new Date(news.created_at).toLocaleString(),
                    updated_at: new Date(news.updated_at).toLocaleString()
                })));
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    static addNews(doc){
        return new Promise((resolve, reject) => {
            axios.post(url, doc).then((response) => {
                const data = response.data;
                resolve(data);
            }).catch(reason => {
                reject(reason);
            });
        })
    }
}

export default NewsService;
