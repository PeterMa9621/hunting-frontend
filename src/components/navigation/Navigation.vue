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
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="" href="#profile">Profile</a>
                        <div class="dropdown-divider"></div>
                        <a class="" @click="logout">
                            Logout
                        </a>

                        <form id="logout-form" action="logout" method="POST" style="display: none;">
                        </form>
                    </div>
                </li>

            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navigation",
        props: ['user'],
        data() {
            return {

            }
        },
        mounted() {

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