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
                                <input class="form-control" v-model="title">
                            </label>
                            <label class="text-left">
                                Content
                                <textarea rows="20" class="form-control" v-model="content"></textarea>
                            </label>
                            <label class="text-left">
                                Category
                                <input class="form-control" v-model="category">
                            </label>
                            <button class="btn btn-outline-primary" @click="addNews">
                                Post
                            </button>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card card-body mt-5 editor text-left">
                            <markdown-it-vue :content="content" />
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

    export default {
        name: "add-news-page",
        data() {
            return {
                title: '',
                content: ':)',
                category: ''
            }
        },
        components: {
            MarkdownItVue
        },
        methods: {
            addNews() {
                NewsService.addNews({
                    title: this.title,
                    content: this.content,
                    category: this.category
                }).then(() => {
                    this.$router.push({name:'news'});
                }).catch((error) => {
                    console.log(error);
                });
            }
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
    }

    div.markdown {
        height: 80vh;

        box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.11);
    }
</style>