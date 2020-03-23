<template>
    <div class="card mt-2 news-list-view">
        <div class="card-header">News</div>
        <div class="card-body">
            <div v-if="news.length>0" >
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
            <div v-else>
                <div class="card card-body">No news</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news-list-view",
        props: ['news']
    }
</script>

<style scoped>
    div.news-list-view {
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        z-index: 1
    }

</style>