<template>
    <div>
        <div class="background-top">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10">
                    <div class="title text-left">
                        <h1>{{ news.title }}</h1>
                        <span class="badge badge-primary category">{{ news.category }}</span>
                        <h4 class="mt-3">Author: {{ news.author }}</h4>
                        <p class="mt-3">Posted at: {{ news.created_at }}</p>
                    </div>
                </div>
                <div class="col-sm-1"></div>
            </div>
        </div>
        <div class="content text-left">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10">
                    <markdown-it-vue class="md-body" :content="news.content" />
                </div>
                <div class="col-sm-1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewsService from "../../services/NewsService";
    import MarkdownItVue from 'markdown-it-vue'

    export default {
        name: "news-detail-page",
        components: {
            MarkdownItVue
        },
        data() {
            return {
                news: {
                    content: ''
                }
            }
        },
        methods: {
            getNews(id) {
                NewsService.getNews(id).then((response) => {
                    this.news = response[0];
                });
            }
        },
        created() {
            this.getNews(this.$route.params.id);
        }
    }
</script>

<style scoped>
    div.background-top {
        position: relative;
        padding: 5rem 5rem 5rem 5rem;

        width: 100%;
        background-color: #343a40;
    }

    div.title {
        color: wheat;
    }

    .category {
        font-size: 20px;
    }

    div.content {
        padding: 5rem;
        font-size: 20px;
    }

</style>