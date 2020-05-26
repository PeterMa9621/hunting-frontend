import axios from 'axios';
import News from '../model/News'

const url = 'http://localhost:8000/api/news/';

class NewsService {
    static getNews(id = null){
        let newsUrl = url;
        if(id!=null)
            newsUrl += id;
        return new Promise((resolve, reject) => {
            axios.get(newsUrl).then((response) => {
                const data = response.data;
                //console.log(data);
                const news = data.map(news => (new News({
                    ...news,
                    created_at: new Date(news.created_at).toLocaleString(),
                    updated_at: new Date(news.updated_at).toLocaleString()
                })));

                resolve(news);
            }).catch(error => {
                reject(error);
            });
        });
    }

    static addNews(doc){
        return new Promise((resolve, reject) => {
            axios.post(url, doc).then((response) => {
                const data = response.data;
                resolve(data);
            }).catch(error => {
                reject(error);
            });
        })
    }

    static updateNews(id, doc){
        return new Promise((resolve, reject) => {
            axios.put(url + id, doc).then((response) => {
                const data = response.data;
                resolve(data);
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static deleteNews(id){
        return new Promise((resolve, reject) => {
            axios.delete(url + id).then((response) => {
                const data = response.data;
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default NewsService;
