<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
                <div class="row">
                    <div class="col-6">
                        <div class="card card-body mt-5 editor">
                            <label class="text-left">
                                Title
                                <input class="form-control" v-model="news.title">
                            </label>
                            <label class="text-left">
                                Content
                                <textarea rows="20" class="form-control editor-content" v-model="news.content"></textarea>
                            </label>

                            <label class="text-left">
                                Category
                                <input class="form-control" v-model="news.category">
                            </label>
                            <button class="btn btn-outline-info" @click="editNews">
                                Edit
                            </button>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card card-body mt-5 editor text-left">
                            <markdown-it-vue :content="news.content" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-1"></div>
        </div>

    </div>
</template>

<script>
    import MarkdownItVue from 'markdown-it-vue'
    import NewsService from "../../services/NewsService";
    import UserService from "../../services/UserService";
    import News from "../../model/News";

    export default {
        name: "edit-news-page",
        data() {
            return {
                news: new News({})
            }
        },
        components: {
            MarkdownItVue
        },
        methods: {
            editNews() {
                const newsId = this.$route.params.id;
                UserService.checkAuth(this.$cookies.get('session'), localStorage.getItem('username')).then((response) => {
                    const user = response[0];
                    if(user.is_admin===1){
                        NewsService.updateNews(newsId, {
                            title: this.news.title,
                            content: this.news.content,
                            category: this.news.category
                        }).then(() => {
                            this.$router.push({name:'news-detail', params: {id: newsId}});
                        }).catch((error) => {
                            alert(error.error);
                            console.log(error);
                        });
                    } else {
                        this.$router.push({name:'home'});
                    }

                }).catch((error) => {
                    alert(error);
                });
            },
            getNews(id) {
                NewsService.getNews(id).then((response) => {
                    this.news = response[0];
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
        created() {
            this.getNews(this.$route.params.id);
        }
    }
</script>

<style scoped>
    div.editor {
        height: 80vh;
        -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.21);
        -webkit-border-radius: 10px 10px 10px 10px;
        border-radius: 10px 10px 10px 10px;
        overflow: auto;
    }

    textarea.editor-content {
        resize: none;
    }

    div.markdown {
        height: 80vh;

        box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.11);
    }
</style>