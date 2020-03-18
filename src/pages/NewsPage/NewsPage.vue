<template>
    <div class="container">
        <news-slide></news-slide>
        <div class="card mt-2">
            <div class="card-header">
                Home page
            </div>
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
</style>
