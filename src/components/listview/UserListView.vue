<template>
    <div class="card mt-2 news-list-view">
        <div class="card-header">Users</div>
        <div class="card-body">
            <div class="list-group" v-if="users.length > 0">
                <router-link v-for="each_user in users" :key="each_user.username" :to="{name: 'other-profile', params: {id: each_user.username}}"
                             class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="row">
                        <div class="col-2 my-auto">
                            <img :src="require('@/assets/img/home-banner.jpg')" width="100%" alt="Avatar">
                        </div>
                        <div class="col-10">
                            <div class="row">
                                <h4>{{ each_user.username }}</h4>
                            </div>
                            <div class="row">
                                <span v-if="each_user.is_admin===1" class="badge badge-warning">Admin</span>
                                <span v-else class="badge badge-primary">Player</span>
                            </div>
                            <div class="row justify-content-between mt-3">
                                <small>Author: {{ each_user.email }}</small>
                                <small>{{ each_user.created_at }}</small>
                            </div>
                        </div>
                    </div>
                </router-link>

            </div>
            <div v-else>
                <div class="card card-body">No users</div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserService from "../../services/UserService";

    export default {
        name: "user-list-view",
        data() {
            return {
                users: []
            }
        },
        methods: {
            getNews() {
                UserService.getUsers().then((response) => {
                    this.users = response;
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