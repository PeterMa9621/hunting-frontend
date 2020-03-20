<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="z-index: 100">
        <router-link class="navbar-brand" to="/">
            <img src="../../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Hunting World
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/news">News</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/download">Download</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
            </ul>
            <ul class="navbar-nav form-inline my-2 my-lg-0">
                <li v-if="!user.username" class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li v-if="!user.username" class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>

                <li v-if="user.username" id="profile" class="nav-item dropleft">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{user.username}}
                    </a>
                    <div class="dropdown-menu justify-content-center" aria-labelledby="navbarDropdown">
                        <router-link class="btn btn-link" to="/profile">Profile</router-link>
                        <div class="dropdown-divider"></div>
                        <button class="btn btn-link" @click="logout">
                            Logout
                        </button>

                        <form id="logout-form" action="logout" method="POST" style="display: none;">
                        </form>
                    </div>
                </li>

            </ul>
        </div>
    </nav>
</template>

<script>
    import UserService from "../../services/UserService";

    export default {
        name: "navigation",
        props: ['user'],
        data() {
            return {

            }
        },
        created() {
            const sessionId = this.$cookies.get('session');
            const username = localStorage['username'];
            if(sessionId!=null && username!=null){
                console.log('Have session:', sessionId, ", username:", username);
                UserService.checkAuth(sessionId, username).then((response) => {
                    const user = response[0];
                    console.log('Auth passed!');
                    this.user.username = localStorage['username'] = user.username;
                }).catch((error) => {
                    this.user.username = '';
                    delete localStorage['username'];
                    this.$cookies.remove('session');
                    console.log(error.data)
                });
            }

        },
        methods: {
            logout() {
                delete localStorage.username;
                this.$emit('logout');
                this.$cookies.remove('session');
            },
        },
    }
</script>

<style scoped>

</style>