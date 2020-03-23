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
                    <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'news'}">News</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'download'}">Download</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'about'}">About</router-link>
                </li>
            </ul>
            <ul class="navbar-nav form-inline my-2 my-lg-0">
                <li v-if="!user.username" class="nav-item">
                    <router-link class="nav-link" :to="{name:'login'}">Login</router-link>
                </li>
                <li v-if="!user.username" class="nav-item">
                    <router-link class="nav-link" :to="{name:'register'}">Register</router-link>
                </li>
                <li v-if="user.username && user.is_admin===1" class="nav-item">
                    <router-link class="nav-link" :to="{name:'add-news'}">Post News</router-link>
                </li>
                <li v-if="user.username" id="profile" class="nav-item dropleft">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{user.username}}
                    </a>
                    <div class="dropdown-menu justify-content-center" aria-labelledby="navbarDropdown">
                        <div class="row justify-content-center">
                            <router-link class="btn btn-link" :to="{name:'profile'}">Profile</router-link>
                        </div>

                        <div class="dropdown-divider"></div>
                        <div class="row justify-content-center">
                            <button class="btn btn-link" @click="logout">Logout</button>
                        </div>
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
        data() {
            return {
                user: {
                    username: '',
                    is_admin: 0
                }
            }
        },
        created() {
            const sessionId = this.$cookies.get('session');
            const username = localStorage['username'];
            // Check if the user have both username and session id
            if(sessionId!=null && username!=null){
                this.user.username = username;
                console.log('Have session:', sessionId, ", username:", username);
                // Check from server
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
            } else {
                this.user.username = '';
                delete localStorage['username'];
                this.$cookies.remove('session');
            }

        },
        methods: {
            logout() {
                delete localStorage.username;
                this.$cookies.remove('session');
                this.$router.push({name:'login'});
                this.user = {};
            },
        },
        mounted() {
            this.$root.$on('onLogin', (user) => {
                this.user = user;
            });

            this.$root.$on('onLogout', () => {
                this.logout();
            })
        }
    }
</script>

<style scoped>

</style>