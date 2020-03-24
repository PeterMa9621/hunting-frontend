<template>
    <div>
        <div class="row justify-content-center" style="color: darkred">
            {{errMsg}}
        </div>
        <div class="background-top">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10">
                    <div class="title text-left">
                        <div class="row justify-content-between">
                            <h1>{{ news.title }}</h1>
                            <div class="dropdown float-right" v-if=" user.is_admin===1 ">
                                <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                    Operation
                                </button>
                                <div class="dropdown-menu">
                                    <router-link class="dropdown-item dropdown-hover" :to="{name:'edit-news', params: {id: this.$route.params.id}}">
                                        Edit
                                    </router-link>
                                    <div class="dropdown-divider"></div>
                                    <button class="dropdown-item dropdown-hover" @click="deleteNews">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <span class="badge badge-primary category">{{ news.category }}</span>
                        </div>
                        <div class="row">
                            <h4 class="mt-3">Author: {{ news.author }}</h4>
                        </div>
                        <div class="row">
                            <p class="mt-3">Posted at: {{ news.created_at }}</p>
                        </div>
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
    import News from "../../model/News";

    export default {
        name: "news-detail-page",
        components: {
            MarkdownItVue
        },
        computed: {
            user: function () {
                return this.$store.state.user;
            }
        },
        data() {
            return {
                news: new News({}),
                errMsg: ''
            }
        },
        methods: {
            getNews(id) {
                NewsService.getNews(id).then((response) => {
                    this.news = response[0];
                });
            },
            deleteNews() {
                NewsService.deleteNews(this.$route.params.id).then(() => {
                    this.$router.push({name:'news'});
                }).catch((error) => {
                    this.errMsg = 'Error: ' + error;
                });
            },
            /*
            active(e) {
                //console.log(e.target);
                e.target.classList.add("active");
            },
            unactive(e) {
                e.target.classList.remove("active");
            }
            */
        },
        created() {
            //console.log("Saved User,", this.user.username);
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

    .dropdown-hover:hover {
        background-color: #007bff;
        color: white;
    }
</style>