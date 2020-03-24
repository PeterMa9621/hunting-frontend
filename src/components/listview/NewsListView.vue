<template>
    <div class="card mt-2 news-list-view">
        <div class="card-header">News</div>
        <div class="card-body">
            <div class="list-group" v-if="news.length > 0">
                <router-link v-for="each_new in news" :key="each_new.id" :to="{name: 'news-detail', params: {id: each_new.id}}"
                             class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="row">
                        <div class="col-2 my-auto">
                            <img :src="require('@/assets/img/home-banner.jpg')" width="100%" alt="Avatar">
                        </div>
                        <div class="col-10">
                            <div class="row">
                                <h4>{{ each_new.title }}</h4>
                            </div>
                            <div class="row">
                                <span class="badge badge-primary">{{ each_new.category }}</span>
                            </div>
                            <div class="row justify-content-between mt-3">
                                <small>Author: {{ each_new.author }}</small>
                                <small>{{ each_new.created_at }}</small>
                            </div>
                        </div>
                    </div>
                </router-link>

            </div>
            <div v-else>
                <div class="card card-body">No news</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewsService from "../../services/NewsService";

    export default {
        name: "news-list-view",
        data() {
            return {
                news: []
            }
        },
        methods: {
            getNews() {
                NewsService.getNews().then((response) => {
                    this.news = response;
                });
            }
        },
        created() {
            this.getNews();
        }
    }
</script>

<style scoped>
    div.news-list-view {
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        z-index: 1
    }

</style>