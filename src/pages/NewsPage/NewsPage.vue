<template>
    <div>
        <div class="background-top">
            <div class="container">
                <news-slide class="news-list-view"></news-slide>
                <div class="card mt-2 news-list-view" style="z-index: 1">
                    <div class="card-header">News</div>
                    <div class="card-body">
                        <div class="card card-body" v-for="each_new in news" :key="each_new.id">
                            <div class="row">
                                <div class="col-2 my-auto">
                                    <img src="https://photolemur.com/img/home/top-slider/after-1440.jpg" width="100%" alt="Avatar">
                                </div>
                                <div class="col-10">
                                    <div class="row justify-content-between">
                                        <small>{{ each_new.title }}</small>
                                        <small>{{ each_new.created_at }}</small>
                                    </div>
                                    <div class="row">
                                        {{ each_new.content }}
                                    </div>
                                    <div class="row justify-content-between">
                                        <small>Author: {{ each_new.author }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import NewsSlide from "../../components/slide/NewsSlide";
    import NewsService from "../../services/NewsService";

    export default {
        name: 'news-page',
        props: {
            msg: String
        },
        components: {
            NewsSlide
        },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.background-top {
        height: 40vh;
        width: 100%;
        background-color: #343a40;
    }

    div.news-list-view {
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    }
</style>
