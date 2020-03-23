<template>
    <div>
        <div class="background-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-1"></div>
                    <div class="col-lg-6 col-md-10">
                        <news-slide></news-slide>
                    </div>
                    <div class="col-lg-3 col-md-1"></div>
                </div>

            </div>
        </div>
        <div class="background-middle"></div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3 col-md-1"></div>
                <div class="col-lg-6 col-md-10">
                    <news-list-view :news="news" class="news-list-view"  style="z-index: 1"></news-list-view>
                </div>
                <div class="col-lg-3 col-md-1"></div>
            </div>

        </div>
    </div>
</template>

<script>
    import NewsSlide from "../../components/slide/NewsSlide";
    import NewsService from "../../services/NewsService";
    import NewsListView from "../../components/listview/NewsListView";

    export default {
        name: 'news-page',
        props: {
            msg: String
        },
        components: {
            NewsListView,
            NewsSlide,
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
        position: relative;
        width: 100%;
        background-color: #343a40;
    }

    div.background-middle {
        position: absolute;
        height: 20vh;
        width: 100%;
        z-index: 0;
        background-color: #ffffff;
        transform: translateY(-10vh);
    }
</style>
