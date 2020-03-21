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
                                <div class="row justify-content-end">
                                    <button class="btn btn-outline-dark mr-3">Edit Profile</button>
                                </div>
                            </div>

                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item active">
                                    <a class="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="true">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="game-tab" data-toggle="tab" href="#game" role="tab" aria-controls="game" aria-selected="false">Game</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
                                    <div class="card card-body">
                                        <div class="row">
                                            <div class="col-6">
                                                <h5>Email</h5>
                                            </div>
                                            <div class="col-6">
                                                <p class="text-left">{{ user.email }}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <h5>Join At</h5>
                                            </div>
                                            <div class="col-6">
                                                <p class="text-left">{{ user.created_at }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="game" role="tabpanel" aria-labelledby="game-tab">
                                    <div class="card card-body">
                                        <div class="row">
                                            <div class="col-6">
                                                <h5>Game Server</h5>
                                            </div>
                                            <div class="col-6">
                                                <p class="text-left">None</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <h5>Gold Balance</h5>
                                            </div>
                                            <div class="col-6">
                                                <p class="text-left">0</p>
                                            </div>
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
                user: []
            }
        },
        methods: {
            getUser() {
                UserService.checkAuth(this.$cookies.get('session'), localStorage.username).then((response) => {
                    this.user = response[0];
                    this.user.created_at = moment(this.user.created_at).format('MM/DD/YYYY hh:mm');
                })
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