<template>
    <div>
        <div class="background-top">
        </div>
        <div class="background-middle">
            <div class="container">
                <div class="card card-body profile-card">
                    <div class="row">
                        <div class="col-md-4 my-auto">
                            <img :src="require('@/assets/logo.png')" height="100px" width="100px">
                            <p class="text-center">{{ user.username }}</p>
                        </div>
                        <div class="col-md-8">
                            <div class="form-group">
                            </div>

                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item active">
                                    <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Profile</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
                                    <div class="card card-body" style="border: none">
                                        <div class="row">
                                            <div class="col-6">
                                                <h5>Email</h5>
                                            </div>
                                            <div class="col-6">
                                                <input class="text-left form-control" v-model="user.email">
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-6">
                                                <h5>Join At</h5>
                                            </div>
                                            <div class="col-6">
                                                <p class="text-left">{{ user.created_at }}</p>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center">
                                            <div class="form-group">
                                                <span style="color: green">{{ notification }}</span>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center">
                                            <button class="btn btn-outline-primary" @click="edit">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="background-bottom">

        </div>
    </div>
</template>

<script>
    import UserService from "../../services/UserService";
    import moment from "moment";

    export default {
        name: "profile-page",
        data() {
            return {
                user: [],
                notification: ''
            }
        },
        methods: {
            getUser() {
                UserService.checkAuth(this.$cookies.get('session'), localStorage.username).then((response) => {
                    this.user = response[0];
                    this.user.created_at = moment(this.user.created_at).format('MM/DD/YYYY hh:mm');
                }).catch(() => {
                    this.$router.push('login');
                });
            },
            edit() {
                UserService.updateUser(this.user.username, { email: this.user.email }).then(() => {
                    this.notification = 'Succeed to update your profile!';
                    setTimeout(() => {
                        this.$router.push({ name:'profile'});
                    }, 1000);
                }).catch((reason) => {
                    this.notification = reason.error;
                });
            }
        },
        created() {
            this.getUser();
        }
    }
</script>

<style scoped>
    div.background-top {
        position: relative;
        height: 10vh;
        width: 100%;
        z-index: 1;
        background-color: #343a40;
    }

    div.background-middle {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 1;
        background-color: #343a40;
    }

    div.background-bottom {
        position: relative;
        height: 30vh;
        width: 100%;
        z-index: -1;
        transform: skewY(5deg) translateY(-10vh);
        background-color: #343a40;
    }

    div.profile-card {
        position: relative;
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        border-radius:0.5rem;
    }
</style>